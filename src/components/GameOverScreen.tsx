import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { ChefHat, Share2, Menu as MenuIcon, Frown, Meh, Utensils, Laugh, Carrot } from 'lucide-react';
import { GameResult, Difficulty, GameMode } from '../types';
import { DonationButton } from './Monetization';
import { NewsletterSignup } from './NewsletterSignup';
import { NextMenuTimer } from './NextMenuTimer'; // NEW
import { AffiliateRow } from './AffiliateRow';
import { logEvent, EVENTS } from '../services/analytics';
import { getTomorrowTeaser } from '../services/gameService'; // NEW

interface GameOverScreenProps {
    totalScore: number;
    gameResult: GameResult | null;
    difficulty: Difficulty;
    gameMode: GameMode;
    APP_URL: string;
    onMenu: () => void;
    heroImageUrl?: string;
    streak?: number;
}

const CHEF_VERDICTS = [
    { min: 0, text: "You are an absolute doughnut.", icon: <Frown size={24} /> },
    { min: 5000, text: "It's raw! But edible.", icon: <Meh size={24} /> },
    { min: 10000, text: "Finally, some good food.", icon: <Utensils size={24} /> },
    { min: 15000, text: "Delicious. Finally.", icon: <Laugh size={24} /> },
    { min: 20000, text: "Michelin Star worthy. Stunning.", icon: <ChefHat size={24} /> }
];

const getChefVerdict = (score: number) => {
    return CHEF_VERDICTS.slice().reverse().find(v => score >= v.min) || CHEF_VERDICTS[0];
};

const Barcode = () => (
    <div className="h-12 w-full max-w-[200px] mx-auto opacity-80" style={{
        backgroundImage: `repeating-linear-gradient(90deg, 
            #000 0px, #000 2px, 
            transparent 2px, transparent 4px,
            #000 4px, #000 7px,
            transparent 7px, transparent 9px,
            #000 9px, #000 10px,
            transparent 10px, transparent 12px
        )`
    }} />
);

const calculatePercentile = (score: number, difficulty: Difficulty) => {
    let mean = 18000;
    let stdDev = 3000;

    // Adjust curve based on difficulty expectation
    switch (difficulty) {
        case Difficulty.KIDS:
            mean = 25000; // Very easy to score high
            stdDev = 2000;
            break;
        case Difficulty.EASY:
            mean = 20000; // Easier to get high scores
            stdDev = 2500;
            break;
        case Difficulty.MEDIUM:
            mean = 18000;
            stdDev = 3000;
            break;
        case Difficulty.HARD:
            mean = 15000; // Harder to get high scores
            stdDev = 4000;
            break;
    }

    const z = (score - mean) / stdDev;
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    let prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (z > 0) prob = 1 - prob;
    return Math.max(1, Math.min(99, Math.round(prob * 100)));
};

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
    totalScore,
    gameResult,
    difficulty,
    gameMode,
    APP_URL,
    onMenu,
    heroImageUrl,
    streak = 1
}) => {
    const receiptRef = useRef<HTMLDivElement>(null);
    const [receiptReady, setReceiptReady] = useState(false);
    const [email, setEmail] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const verdict = getChefVerdict(totalScore);

    // Calculate Rank based on "Points Lost" (Accuracy)
    // Max Score = 25,000
    const maxScore = 25000;
    const lostPoints = maxScore - totalScore;

    let rankTitle = "Commis Chef";
    let percentile = 80;
    let rankColor = "text-zinc-500";

    if (lostPoints === 0) {
        rankTitle = "Executive Chef";
        percentile = 1;
        rankColor = "text-culinary-gold";
    } else if (lostPoints <= 1000) {
        rankTitle = "Head Chef";
        percentile = 10;
        rankColor = "text-orange-400";
    } else if (lostPoints <= 3500) {
        rankTitle = "Line Cook";
        percentile = 40;
        rankColor = "text-yellow-600";
    } else {
        rankTitle = "Commis Chef";
        percentile = 80;
        rankColor = "text-zinc-400";
    }

    const GlobalAverageScore = 22000;

    const handleShare = async () => {
        logEvent(EVENTS.SHARE, { score: totalScore, difficulty });

        const header = `👨‍🍳 I just cooked ${gameResult?.rounds[0]?.dish || 'Dinner'} on DishGuise!\n🔥 Streak: ${streak} • ${rankTitle}\n`;

        const grid = gameResult?.rounds.map(r => {
            let cubes = "";
            if (r.score >= 4000) cubes = "🟩🟩🟩";
            else if (r.score >= 2000) cubes = "🟨🟨";
            else cubes = "🟥";

            const dishIcon = r.emoji || "🍲";
            const flag = r.countryCode
                ? String.fromCodePoint(...r.countryCode.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0)))
                : r.flagEmoji;

            return `${dishIcon} ${flag} ${cubes} (${r.score})`;
        }).join('\n');

        const footer = `\nScore: ${totalScore.toLocaleString()} | Top ${percentile}%\n${APP_URL}`;

        const shareText = `${header}\n${grid}\n${footer}`;

        // 2. Share API / Clipboard
        if (navigator.share && navigator.canShare && navigator.canShare({ text: shareText })) {
            try {
                await navigator.share({
                    text: shareText,
                    title: 'DishGuise Daily'
                });
                return;
            } catch (e) { }
        }

        try {
            await navigator.clipboard.writeText(shareText);
            alert("Results copied to clipboard! Share them with your friends.");
        } catch (e) {
            console.error("Share failed", e);
        }
    };

    return (
        <div className="min-h-screen bg-culinary-dark flex flex-col items-center p-4">
            <div className="w-full max-w-sm space-y-4">
                {/* 1. Hero Image */}
                {heroImageUrl && (
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg relative group">
                        <img
                            src={heroImageUrl}
                            alt="Daily Dish"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <span className="text-white font-serif font-bold text-lg">Today's Special</span>
                        </div>
                    </div>
                )}

                {/* 2. Rank & Progress */}
                <div className="bg-zinc-900/90 p-6 rounded-xl text-center space-y-4 backdrop-blur-sm border border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

                    <div className="space-y-1">
                        <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">Rank Achieved</div>
                        <h2 className={`font-serif text-3xl font-bold ${rankColor} drop-shadow-sm`}>
                            {rankTitle}
                        </h2>
                        <div className="text-zinc-400 text-xs font-mono">
                            {percentile <= 60 ? (
                                <>Top <span className="text-white font-bold">{percentile}%</span> of players</>
                            ) : (
                                <span className="text-zinc-500">Kitchen Porter in Training</span>
                            )}
                        </div>
                    </div>

                    {/* Progress Bar (Gradient Reveal) */}
                    <div className="relative pt-8 pb-2 px-2">
                        {/* Track Container */}
                        <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden relative border border-zinc-700/50">
                            {/* Full Gradient Background (Fixed) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500 opacity-90" />

                            {/* Reveal Mask (Covers the 'unearned' part) */}
                            <div
                                className="absolute right-0 top-0 h-full bg-zinc-800 transition-all duration-1000 ease-out"
                                style={{ width: `${100 - Math.min(100, (totalScore / 25000) * 100)}%` }}
                            />

                            {/* Inner Shadow/Gloss */}
                            <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none" />
                        </div>

                        {/* Ticks/Markers Overlay */}
                        <div className="absolute top-2 w-full h-full pointer-events-none px-2 left-0">
                            {/* Global Avg Marker */}
                            <div
                                className="absolute top-[-2rem] flex flex-col items-center transform -translate-x-1/2"
                                style={{ left: `${(GlobalAverageScore / 25000) * 100}%` }}
                            >
                                <span className="text-[9px] uppercase tracking-wider text-zinc-500 bg-zinc-900/90 px-1 rounded border border-zinc-800">Avg</span>
                                <div className="w-0.5 h-10 bg-zinc-600/50 dashed-line"></div>
                            </div>

                            {/* Player Marker */}
                            <div
                                className="absolute top-[-0.9rem] flex flex-col items-center transform -translate-x-1/2 z-10 transition-all duration-1000 ease-out"
                                style={{ left: `${(totalScore / 25000) * 100}%` }}
                            >
                                <div className={`relative p-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.5)] border-2 border-zinc-900 ${totalScore > 15000 ? 'bg-emerald-500 text-white' :
                                    totalScore > 5000 ? 'bg-yellow-500 text-black' :
                                        'bg-red-500 text-white'
                                    }`}>
                                    <ChefHat size={14} strokeWidth={2.5} />
                                    {/* Little arrow/pointer triangle at bottom */}
                                    <div className={`absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent ${totalScore > 15000 ? 'border-t-emerald-500' :
                                        totalScore > 5000 ? 'border-t-yellow-500' :
                                            'border-t-red-500'
                                        }`}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-4">
                        <div className="text-left">
                            <div className="text-[9px] text-zinc-600 uppercase tracking-widest">Score</div>
                            <div className="font-mono text-xl text-white leading-none">{totalScore.toLocaleString()}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-zinc-600 uppercase tracking-widest">Points Deducted</div>
                            <div className="font-mono text-xl text-white leading-none">
                                -{lostPoints.toLocaleString()} <span className="text-zinc-600 text-xs text-[10px] align-top"> ({((totalScore / 25000) * 100).toFixed(0)}%)</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 3. Actions */}
                <div className="grid grid-cols-1 gap-2">
                    {/* Dynamic Shop Button */}
                    {/* Dynamic Shop Button */}
                    {(() => {
                        const targetRound = gameResult?.rounds.find(r => r.isMakeable) || gameResult?.rounds[gameResult.rounds.length - 1];
                        if (!targetRound) return null;

                        return (
                            <AffiliateRow
                                dishName={targetRound.dish}
                                origin={targetRound.region || "World"}
                                countryCode={targetRound.countryCode}
                                className="mb-2"
                            />
                        );
                    })()}

                    <button
                        onClick={handleShare}
                        className="w-full bg-culinary-gold text-black font-bold py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                    >
                        <Share2 size={18} /> Share Result
                    </button>

                    <button
                        onClick={onMenu}
                        className="w-full bg-zinc-800 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-zinc-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                    >
                        <MenuIcon size={18} /> Menu
                    </button>
                </div>

                <div className="w-full mt-4 space-y-4">
                    {/* 5. Next Menu & Teaser */}
                    <div className="space-y-2">
                        <NextMenuTimer />
                        {(() => {
                            const teaser = getTomorrowTeaser();
                            if (teaser) {
                                return (
                                    <div className="text-center font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                                        Tomorrow's {teaser.label}: <span className="text-zinc-300 font-bold">{teaser.value}</span>
                                    </div>
                                );
                            }
                            return null;
                        })()}
                    </div>

                    <NewsletterSignup variant={totalScore > 15000 ? 'win' : 'loss'} />
                </div>

                <div className="flex justify-center py-2">
                    <DonationButton />
                </div>
            </div>

            {/* 4. TIGHT RECEIPT (At Bottom) */}
            <div
                ref={receiptRef}
                className={`w-full max-w-sm bg-[#f4f4f0] text-zinc-900 shadow-2xl overflow-hidden relative mt-8 ${!receiptReady ? 'animate-print-receipt' : ''}`}
            >
                <div className="receipt-edge"></div>
                <div className="p-4 font-mono text-zinc-900 text-xs">
                    <div className="text-center pb-2 mb-2 border-b-2 border-dashed border-zinc-400/50">
                        <div className="flex justify-center mb-1">
                            <ChefHat size={24} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl font-black tracking-tighter uppercase mb-1 scale-y-110">DishGuise</h2>
                        <div className="text-[9px] uppercase tracking-widest text-zinc-500 space-y-0.5">
                            <p>STREAK: {streak} DAY{streak !== 1 ? 'S' : ''}</p>
                            <p>{new Date().toLocaleDateString()} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </div>

                    <div className="flex justify-between text-[9px] uppercase font-bold border-b border-zinc-900 pb-1 mb-1">
                        <span>ITEM</span>
                        <span>AMT</span>
                    </div>

                    <div className="space-y-1 mb-4 leading-tight">
                        {gameResult?.rounds.map((r, i) => {
                            const potential = 5000;
                            return (
                                <div key={i} className="group">
                                    <div className="flex justify-between items-start font-bold uppercase">
                                        <div className="flex gap-1 w-full overflow-hidden">
                                            {/* Flag Restoration */}
                                            {r.countryCode && (
                                                <img
                                                    src={`https://flagcdn.com/w20/${r.countryCode.toLowerCase()}.png`}
                                                    width="14"
                                                    alt={r.countryCode}
                                                    className="inline-block rounded-[1px] mt-0.5"
                                                />
                                            )}
                                            {r.isMakeable && <span title="Cook at Home" className="text-[10px]">🏠</span>}
                                            <div className="flex-1 truncate pr-1">
                                                {r.dish}
                                            </div>
                                        </div>
                                        <span>{potential.toLocaleString()}</span>
                                    </div>
                                    {potential - r.score > 0 && (
                                        <div className="flex justify-between items-baseline text-[9px] text-zinc-500 italic pl-5">
                                            <span>PROMO CODE: MISSED</span>
                                            <span>-{(potential - r.score).toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="border-t-2 border-dashed border-zinc-400 py-2 space-y-0.5">
                        <div className="flex justify-between items-end">
                            <span className="font-bold uppercase text-[10px]">Tax (0%)</span>
                            <span className="font-mono">0</span>
                        </div>
                        <div className="flex justify-between items-end pt-1 text-base">
                            <span className="font-black uppercase transform scale-y-110">Total</span>
                            <span className="font-black border-b-2 border-zinc-900">{totalScore.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="bg-zinc-200/50 p-2 rounded text-center my-3">
                        <p className="italic font-bold text-sm leading-tight">"{verdict.text}"</p>
                        <p className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">- Chef</p>
                    </div>

                    <div className="flex flex-col items-center gap-1 opacity-60 grayscale">
                        <Barcode />
                        <p className="text-center font-mono text-[8px] uppercase tracking-widest mt-1">
                            {APP_URL}
                        </p>
                    </div>
                </div>
                <div className="receipt-edge receipt-edge-bottom"></div>
            </div>
        </div>
    );
};
