
import React, { useEffect, useState } from 'react';
import { ChefHat, Star, X } from 'lucide-react';

interface LevelUpModalProps {
    oldLevel: number;
    newLevel: number;
    newTitle: string;
    onClose: () => void;
}

export const LevelUpModal: React.FC<LevelUpModalProps> = ({ oldLevel, newLevel, newTitle, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
            <div className={`
                relative w-full max-w-sm bg-[#1a1a1e] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl overflow-hidden
                transform transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)
                ${mounted ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-12'}
            `}>
                {/* Background Rays */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-[500px] h-[500px] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_20deg,#eebb4d_40deg,transparent_60deg,transparent_80deg,#eebb4d_100deg,transparent_120deg)] animate-spin-slow rounded-full blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-culinary-gold blur-2xl opacity-30 rounded-full animate-pulse"></div>
                        <div className="relative bg-zinc-900 p-4 rounded-full border-2 border-culinary-gold shadow-lg">
                            <ChefHat size={48} className="text-culinary-gold" />
                            <div className="absolute -top-2 -right-2 bg-white text-black text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-zinc-900 animate-bounce">
                                <Star size={12} fill="black" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-culinary-gold font-serif text-3xl font-black uppercase tracking-tight mb-1 drop-shadow-lg">
                        Upskilling Achieved
                    </h2>
                    <div className="h-0.5 w-12 bg-white/20 mb-4 rounded-full"></div>

                    <div className="flex items-center gap-4 text-white mb-6">
                        <div className="flex flex-col items-center opacity-50">
                            <span className="text-[10px] uppercase tracking-widest font-mono">Was</span>
                            <span className="text-2xl font-bold font-serif">Lvl {oldLevel}</span>
                        </div>
                        <div className="text-culinary-gold">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                        </div>
                        <div className="flex flex-col items-center text-culinary-gold">
                            <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Now</span>
                            <span className="text-4xl font-black font-serif animate-pulse">Lvl {newLevel}</span>
                        </div>
                    </div>

                    <div className="bg-zinc-800/80 px-4 py-2 rounded-lg border border-white/10 mb-8">
                        <span className="text-zinc-400 text-[10px] uppercase tracking-widest block mb-1">New Title Unlocked</span>
                        <span className="text-xl font-serif text-white italic">"{newTitle}"</span>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full bg-white text-black font-bold py-4 rounded-xl uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors shadow-lg"
                    >
                        See Service Report
                    </button>
                </div>
            </div>
        </div>
    );
};
