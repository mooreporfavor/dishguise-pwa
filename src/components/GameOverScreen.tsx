import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { ChefHat, Share2, Menu as MenuIcon, Frown, Meh, Utensils, Laugh, Carrot } from 'lucide-react';
import { GameResult, Difficulty, GameMode } from '../types';
import { DonationButton } from './Monetization';
import { logEvent, EVENTS } from '../services/analytics';

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
    const percentile = calculatePercentile(totalScore, difficulty);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReceiptReady(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleShare = async () => {
        logEvent(EVENTS.SHARE, { score: totalScore, difficulty });

        // 1. Build the Viral Grid String
        // Format:
        // 👨‍🍳 DishGuise Daily #42
        // ⭐️ Expert Chef
        //
        // 🌮 🇲🇽 🟩🟩🟩 (3)
        // ...

        const dateStr = new Date().toLocaleDateString('en-US');
        const dishName = gameResult?.rounds.find(r => r.id)?.targetDish || "something delicious"; // Get dish name if available
        // Note: gameResult rounds might not store the targetDish string directly if simplified? 
        // Wait, RoundData has targetDish. GameResult has RoundData[]? No, GameResult has {score, dish, ...}.

        const header = `👨‍🍳 I just cooked ${gameResult?.rounds[0]?.dish || 'Dinner'} on DishGuise!\n🔥 Streak: ${streak} • ${difficulty}\n`;

        const grid = gameResult?.rounds.map(r => {
            // Calculate square colors based on score
            // 5000 = 🟩, 0 = 🟥? Or maybe based on guesses?
            // "guesses" isn't strictly tracked in GameResult rounds, only score.
            // Let's approximate: >4000 = 🟩 (1-2 clues), >2000 = 🟨 (3-4 clues), <2000 = 🟥 (5 clues)
            // Wait, we don't have exact guesses count here easily. 
            // Actually, let's just use Score to visualize "Performance".

            let cubes = "";
            if (r.score >= 4000) cubes = "🟩🟩🟩";
            else if (r.score >= 2000) cubes = "🟨🟨";
            else cubes = "🟥";

            // Emoji Fallback
            const dishIcon = r.emoji || "🍲"; // Use specific emoji if available, else generic pot
            const flag = r.countryCode
                ? String.fromCodePoint(...r.countryCode.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0)))
                : r.flagEmoji;

            return `${dishIcon} ${flag} ${cubes} (${r.score})`;
        }).join('\n');

        const footer = `\nScore: ${totalScore.toLocaleString()} | Top ${100 - percentile}%\n${APP_URL}`;

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

        // Fallback or Image Share (keep existing image logic as secondary option?)
        // Actually, user specifically asked for the Grid to be copied to clipboard.
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

                {/* 2. Visible Viral Grid (Wordle Style) */}
                <div className="bg-zinc-900/80 p-4 rounded-xl text-center space-y-2 backdrop-blur-sm border border-zinc-800">
                    <div className="text-zinc-400 text-[10px] uppercase tracking-widest mb-1">Performance</div>
                    <div className="font-mono text-xl tracking-widest leading-none">
                        {gameResult?.rounds.map((r, i) => {
                            let cubes = "🟥";
                            if (r.score >= 4000) cubes = "🟩";
                            else if (r.score >= 2000) cubes = "🟨";
                            return <span key={i} className="mx-0.5">{cubes}</span>;
                        })}
                    </div>
                    <div className="text-2xl font-black text-white">
                        {totalScore.toLocaleString()} pts
                    </div>
                </div>

                {/* 3. Actions */}
                <div className="grid grid-cols-1 gap-2">
                    {/* Dynamic Shop Button */}
                    {(() => {
                        const makeableDish = gameResult?.rounds.find(r => r.isMakeable)?.dish || gameResult?.rounds[gameResult.rounds.length - 1].dish;
                        return (
                            <a
                                href={`https://www.instacart.com/store/search?s=${encodeURIComponent(makeableDish + " ingredients")}`}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full bg-[#E04F26] text-white font-bold py-3 rounded-xl shadow-lg hover:bg-[#c9421d] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                            >
                                <Carrot size={20} fill="currentColor" />
                                Cook {makeableDish}
                            </a>
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
