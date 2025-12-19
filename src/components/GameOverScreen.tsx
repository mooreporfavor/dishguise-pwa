import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { ChefHat, Share2, Menu as MenuIcon, Frown, Meh, Utensils, Laugh } from 'lucide-react';
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

        const dateStr = new Date().toLocaleDateString('en-US'); // Ideally use a Day ID if available
        const header = `👨‍🍳 DishGuise • ${dateStr}\n🔥 Streak: ${streak} • ${difficulty}\n`;

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
            <div
                ref={receiptRef}
                className={`w-full max-w-sm bg-[#f4f4f0] text-zinc-900 shadow-2xl overflow-hidden relative mb-8 pb-12 ${!receiptReady ? 'animate-print-receipt' : ''}`}
            >
                <div className="receipt-edge"></div>
                <div className="p-6 font-mono text-zinc-900">
                    <div className="text-center pb-4 mb-4 border-b-2 border-dashed border-zinc-400/50">
                        <div className="flex justify-center mb-2">
                            <ChefHat size={32} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-black tracking-tighter uppercase mb-2 scale-y-110">DishGuise</h2>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 space-y-0.5">
                            <p>123 CULINARY AVE, INTERNET</p>
                            <p>TEL: (555) CHEF-YES</p>
                            <p>STREAK: {streak} DAY{streak !== 1 ? 'S' : ''}</p>
                            <p>{new Date().toLocaleDateString()} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </div>

                    <div className="flex justify-between text-[10px] uppercase font-bold border-b border-zinc-900 pb-1 mb-2">
                        <span>QTY</span>
                        <span>ITEM</span>
                        <span>AMT</span>
                    </div>

                    <div className="space-y-2 mb-6 text-xs leading-relaxed">
                        {gameResult?.rounds.map((r, i) => {
                            const potential = 5000;
                            const discount = potential - r.score;
                            return (
                                <div key={i} className="group">
                                    <div className="flex justify-between items-baseline font-bold uppercase">
                                        <div className="flex gap-2 w-full">
                                            <span className="w-4">1</span>
                                            <div className="flex-1 truncate pr-2">
                                                {r.dish}
                                            </div>
                                        </div>
                                        <span>{potential.toLocaleString()}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between items-baseline text-[10px] text-zinc-500 italic">
                                            <span className="pl-6">DISCOUNT (MISSED)</span>
                                            <span>-{discount.toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="border-t-2 border-dashed border-zinc-400 py-3 space-y-1">
                        <div className="flex justify-between items-end">
                            <span className="font-bold uppercase text-sm">Subtotal</span>
                            <span className="font-mono">{Math.floor(totalScore * 0.9).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="font-bold uppercase text-sm">Tax (10%)</span>
                            <span className="font-mono">{Math.floor(totalScore * 0.1).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-end pt-2 text-xl">
                            <span className="font-black uppercase transform scale-y-110">Total</span>
                            <span className="font-black">{totalScore.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="border-t border-b border-zinc-900 py-2 my-4 text-center">
                        <p className="font-bold uppercase text-sm">Auth Code: {Math.floor(Math.random() * 900000) + 100000}</p>
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500">VISA **** **** **** {Math.floor(Math.random() * 9000) + 1000}</p>
                    </div>

                    <div className="bg-zinc-200/50 p-4 rounded text-center mb-6">
                        <div className="flex justify-center text-zinc-800 mb-1 opacity-80">{verdict.icon}</div>
                        <p className="italic font-bold text-lg leading-tight mb-1">"{verdict.text}"</p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Service Report • {new Date().toLocaleDateString()}</p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{difficulty} • STREAK: {streak} DAYS</p>
                        <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Chef's Verdict</p>
                    </div>

                    {!emailSubmitted ? (
                        <div className="mb-6">
                            <p className="text-[10px] uppercase font-bold text-center mb-2 tracking-widest">Join the Kitchen Brigade</p>
                            <form
                                onSubmit={(e) => { e.preventDefault(); setEmailSubmitted(true); logEvent('email_signup'); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="email"
                                    placeholder="chef@email.com"
                                    className="flex-1 bg-white border border-zinc-300 rounded-none px-2 py-1 text-xs font-mono placeholder:uppercase"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="bg-zinc-900 text-white text-[10px] font-bold uppercase px-3 hover:bg-zinc-700 transition-colors">
                                    Join
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="mb-6 text-center text-zinc-900 text-xs font-bold uppercase border border-zinc-900 p-2">
                            Welcome to the Brigade!
                        </div>
                    )}

                    <div className="flex flex-col items-center gap-2 opacity-80">
                        <Barcode />
                        <p className="text-center font-mono text-[9px] uppercase tracking-widest">
                            {APP_URL}
                        </p>
                    </div>
                </div>
                <div className="receipt-edge receipt-edge-bottom"></div>
            </div>
            <div className="w-full max-w-sm space-y-3">
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

                <div className="text-center pb-1">
                    <p className="text-culinary-gold font-serif italic text-lg leading-tight">Think you can outsmart your friends?</p>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Show them the digits</p>
                </div>

                {/* Shop Ingredients Button (Instacart Deep Link placeholder) */}
                <a
                    href="https://www.instacart.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#E04F26] text-white font-bold py-3 rounded-xl shadow-lg hover:bg-[#c9421d] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Instacart_carrot_transparent.png" className="w-5 h-5" alt="Instacart" />
                    Shop Ingredients
                </a>

                <button
                    onClick={handleShare}
                    className="w-full bg-culinary-gold text-black font-bold py-4 rounded-xl shadow-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                    <Share2 size={18} /> Challenge Friends
                </button>
                <div className="flex justify-center py-2">
                    <DonationButton />
                </div>
                <button
                    onClick={onMenu}
                    className="w-full bg-zinc-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-zinc-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                    <MenuIcon size={18} /> Back to Menu
                </button>
            </div>
        </div>
    );
};
