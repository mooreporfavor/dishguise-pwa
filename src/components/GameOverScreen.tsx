import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { ChefHat, Share2, Menu as MenuIcon, QrCode, Frown, Meh, Utensils, Laugh } from 'lucide-react';
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
    onMenu
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
        if (!receiptRef.current) return;

        logEvent(EVENTS.SHARE, { score: totalScore, difficulty });

        try {
            const element = receiptRef.current;
            element.classList.remove('animate-print-receipt');

            const canvas = await html2canvas(element, {
                backgroundColor: '#121212',
                scale: 3,
                useCORS: true,
                logging: false
            });

            const shareData = {
                title: 'DishGuise Service Report',
                text: `I scored ${totalScore} points on DishGuise! 🥘👨‍🍳 Think you can outsmart your friends? Prove it here: ${APP_URL}`,
                url: APP_URL
            };

            canvas.toBlob(async (blob) => {
                if (blob && navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], 'dishguise.png', { type: 'image/png' })] })) {
                    try {
                        const file = new File([blob], 'dishguise-receipt.png', { type: 'image/png' });
                        await navigator.share({
                            files: [file],
                            ...shareData
                        });
                        return;
                    } catch (e) {
                        // Fallback to text copy below
                    }
                }

                // FALLBACK: Copy Text
                try {
                    await navigator.clipboard.writeText(shareData.text);
                    alert("Results copied to clipboard! Share them with your friends.");
                } catch (e) {
                    console.error("Share failed", e);
                }
            });
        } catch (e) { console.error(e); }
    };

    return (
        <div className="min-h-screen bg-culinary-dark flex flex-col items-center p-4">
            <div
                ref={receiptRef}
                className={`w-full max-w-sm bg-[#f4f4f0] text-zinc-900 shadow-2xl overflow-hidden relative mb-8 pb-12 ${!receiptReady ? 'animate-print-receipt' : ''}`}
            >
                <div className="receipt-edge"></div>
                <div className="p-6">
                    <div className="text-center border-b-2 border-dashed border-zinc-300 pb-4 mb-4">
                        <div className="flex justify-center mb-2">
                            <ChefHat size={32} className="text-zinc-800" />
                        </div>
                        <h2 className="text-3xl font-serif font-black tracking-tighter uppercase mb-1">DishGuise</h2>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Service Report • {new Date().toLocaleDateString()}</p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{difficulty} • {gameMode}</p>
                    </div>
                    <div className="space-y-3 mb-6 font-mono text-sm leading-relaxed">
                        {gameResult?.rounds.map((r, i) => {
                            const potential = 5000;
                            const discount = potential - r.score;
                            return (
                                <div key={i} className="pb-1">
                                    <div className="flex justify-between items-baseline font-bold">
                                        <div className="flex items-center gap-2 truncate max-w-[180px] leading-relaxed pb-1">
                                            {r.countryCode ? (
                                                <img
                                                    src={`https://flagcdn.com/w40/${r.countryCode.toLowerCase()}.png`}
                                                    srcSet={`https://flagcdn.com/w80/${r.countryCode.toLowerCase()}.png 2x`}
                                                    width="20"
                                                    alt={r.countryCode}
                                                    className="inline-block rounded-[2px]"
                                                />
                                            ) : (
                                                <span>{r.flagEmoji}</span>
                                            )}
                                            <span className="uppercase truncate">
                                                {r.dish}
                                            </span>
                                        </div>
                                        <span>{potential.toLocaleString()}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between items-baseline text-xs text-zinc-500 italic leading-relaxed pb-1">
                                            <span className="pl-4">↳ Manager Comp (Discount)</span>
                                            <span>-{discount.toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="border-t-2 border-zinc-900 pt-3 flex justify-between items-end mb-2">
                        <span className="font-black text-xl uppercase">Total</span>
                        <span className="font-black text-3xl">{totalScore.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono mb-6 pb-2 border-b border-dashed border-zinc-300">
                        <span className="uppercase text-zinc-500">Global Rank</span>
                        <span className="font-bold bg-black text-white px-2 py-0.5 rounded">Top {100 - percentile}%</span>
                    </div>
                    <div className="bg-zinc-200/50 p-4 rounded text-center mb-4">
                        <div className="flex justify-center text-zinc-800 mb-1 opacity-80">{verdict.icon}</div>
                        <p className="font-serif italic font-bold text-lg leading-tight mb-1">"{verdict.text}"</p>
                        <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Chef's Verdict</p>
                    </div>
                    {!emailSubmitted ? (
                        <div className="mb-4">
                            <p className="text-[10px] uppercase font-bold text-center mb-2">Join the Kitchen Brigade</p>
                            <form
                                onSubmit={(e) => { e.preventDefault(); setEmailSubmitted(true); logEvent('email_signup'); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="email"
                                    placeholder="chef@email.com"
                                    className="flex-1 bg-white border border-zinc-300 rounded px-2 py-1 text-xs"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="bg-zinc-900 text-white text-[10px] font-bold uppercase px-3 rounded">
                                    Join
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="mb-4 text-center text-green-600 text-xs font-bold uppercase">
                            Welcome to the Brigade!
                        </div>
                    )}
                    <div className="flex justify-center opacity-40">
                        <QrCode size={48} />
                    </div>
                    <p className="text-center font-mono text-[9px] mt-2 text-zinc-400">THANK YOU FOR DINING • DISHGUISE.APP</p>
                </div>
                <div className="receipt-edge receipt-edge-bottom"></div>
            </div>
            <div className="w-full max-w-sm space-y-3">
                <div className="text-center pb-1">
                    <p className="text-culinary-gold font-serif italic text-lg leading-tight">Think you can outsmart your friends?</p>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Show them the digits</p>
                </div>
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
