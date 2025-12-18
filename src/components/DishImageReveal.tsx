
import React from 'react';
import { GamePhase } from '../types';
import { Loader2, Sparkles } from 'lucide-react';

interface DishImageRevealProps {
    imageUrl?: string;
    phase: GamePhase;
    mode: string; // kept for compatibility but unused
}

export const DishImageReveal: React.FC<DishImageRevealProps> = ({
    imageUrl,
    phase
}) => {
    // In the new standardized format, image ONLY shows when round is over.
    const showImage = phase === GamePhase.REVEAL;

    return (
        <div className="w-full max-w-md mx-auto flex flex-col gap-4">

            <div className={`
            w-full aspect-square max-h-[40vh] md:max-h-[300px] rounded-xl overflow-hidden shadow-xl border border-white/5 bg-zinc-900 relative
            ${showImage ? 'shadow-culinary-gold/20' : 'shadow-black'}
        `}>
                {imageUrl && showImage ? (
                    <div className="relative w-full h-full animate-fade-in group">
                        <img
                            src={imageUrl}
                            alt="The Dish"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 space-y-2 p-4 relative overflow-hidden">
                        {/* Abstract Placeholder Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        {imageUrl ? (
                            <div className="flex flex-col items-center z-10">
                                <Sparkles className="text-culinary-gold/50 mb-2 animate-pulse" />
                                <p className="text-xs font-medium tracking-widest uppercase text-center opacity-50">Visuals Plated</p>
                                <p className="text-[10px] text-zinc-600 mt-1">(Hidden until Service Complete)</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center z-10">
                                <Loader2 className="animate-spin text-zinc-700" size={24} />
                                <p className="text-xs font-medium tracking-widest uppercase text-center mt-2 opacity-30">Preparing Visuals...</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
