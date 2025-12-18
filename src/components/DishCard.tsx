
import React from 'react';
import { GamePhase, GameMode } from '../types';
import { Utensils, ChefHat } from 'lucide-react';

interface DishCardProps {
    dishName?: string;
    cuisine?: string;
    category?: string;
    phase: GamePhase;
    mode: GameMode;
}

export const DishCard: React.FC<DishCardProps> = ({
    dishName,
    cuisine,
    category,
    phase,
    mode
}) => {
    const isChefMode = mode === 'CHEF';
    const isRevealed = phase === GamePhase.REVEAL;

    // Detective Mode: Hidden until Reveal
    // Chef Mode: Always Visible
    const showName = isChefMode || isRevealed;

    return (
        <div className="w-full max-w-md mx-auto mb-6">
            <div className="bg-[#f4f4f0] text-zinc-900 rounded-sm shadow-xl transform rotate-[-1deg] transition-transform hover:rotate-0 relative overflow-hidden min-h-[160px] flex flex-col">

                {/* Top decorative tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-red-500/20 rotate-2 backdrop-blur-sm border border-white/10 shadow-sm z-10"></div>

                <div className="p-6 flex flex-col items-center justify-center flex-grow border-4 double border-zinc-800 m-2 relative">

                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] pointer-events-none"></div>

                    {showName ? (
                        <div className="text-center z-10 animate-fade-in">
                            <div className="flex items-center justify-center gap-2 text-culinary-gold-dim mb-2 opacity-80">
                                {isChefMode ? <ChefHat size={16} /> : <Utensils size={16} />}
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                                    {isChefMode ? "Prepare this Dish" : "Order Identified"}
                                </span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl font-black leading-none text-zinc-900 mb-2">
                                {dishName}
                            </h2>
                            <p className="font-serif italic text-zinc-500 text-sm">
                                {cuisine} • {category}
                            </p>
                        </div>
                    ) : (
                        <div className="text-center z-10">
                            <div className="text-6xl font-serif text-zinc-300 font-black mb-2 opacity-50">???</div>
                            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-200/50 px-3 py-1 rounded">
                                Mystery Order
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom edge */}
                <div className="h-2 bg-repeat-x w-full opacity-20" style={{
                    backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%)',
                    backgroundSize: '8px 8px'
                }}></div>
            </div>
        </div>
    );
};
