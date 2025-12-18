
import React from 'react';
import { IngredientOption, GamePhase } from '../types';
import { Check, X, Sparkles, Phone, Scissors } from 'lucide-react';

interface ChefPantryProps {
    options: IngredientOption[];
    selectedIds: Set<string>;
    foundIds: Set<string>;
    wrongIds: Set<string>;
    phase: GamePhase;
    onSelect: (id: string, isCorrect: boolean) => void;
    onHint: () => void;
    onTrim: () => void; // NEW PROP
}

export const ChefPantry: React.FC<ChefPantryProps> = ({
    options,
    selectedIds,
    foundIds,
    wrongIds,
    phase,
    onSelect,
    onHint,
    onTrim
}) => {
    const isRoundOver = phase === GamePhase.REVEAL;

    // Progress calculation
    const totalCorrect = options.filter(o => o.isCorrect).length;
    const currentFound = foundIds.size;
    const remainingCount = totalCorrect - currentFound;

    // Distractor calculation for Trim button
    const remainingDistractors = options.filter(o => !o.isCorrect && !wrongIds.has(o.id)).length;

    return (
        <div id="chef-pantry-area" className="w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-end mb-4 px-2">
                <h3 className="font-serif text-xl text-white">Pantry Station</h3>
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Prep: <span className={currentFound === totalCorrect ? "text-green-400" : "text-white"}>{currentFound}</span> / {totalCorrect} Items
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {options.map((opt) => {
                    const isFound = foundIds.has(opt.id);
                    const isWrong = wrongIds.has(opt.id);
                    const isRevealedButMissed = isRoundOver && opt.isCorrect && !isFound;

                    let bgClass = "bg-zinc-800 border-white/10 hover:bg-zinc-700";
                    let textClass = "text-zinc-300";

                    if (isFound) {
                        bgClass = "bg-green-900/30 border-green-500/50";
                        textClass = "text-green-400 font-bold";
                    } else if (isWrong) {
                        bgClass = "bg-red-900/20 border-red-500/50 opacity-50";
                        textClass = "text-red-500 line-through";
                    } else if (isRevealedButMissed) {
                        bgClass = "bg-culinary-gold/10 border-culinary-gold/50";
                        textClass = "text-culinary-gold";
                    }

                    return (
                        <button
                            key={opt.id}
                            disabled={isFound || isWrong || isRoundOver}
                            onClick={() => onSelect(opt.id, opt.isCorrect)}
                            className={`
                            relative p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center text-center min-h-[80px] group
                            ${bgClass}
                        `}
                        >
                            {isFound && <div className="absolute top-2 right-2 text-green-500"><Check size={14} /></div>}
                            {isWrong && <div className="absolute top-2 right-2 text-red-500"><X size={14} /></div>}
                            {isRevealedButMissed && <div className="absolute top-2 right-2 text-culinary-gold"><Sparkles size={14} /></div>}

                            <span className={`font-mono text-sm uppercase tracking-tight leading-tight ${textClass}`}>
                                {opt.name}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* HINT BUTTONS */}
            {!isRoundOver && (remainingCount > 0 || remainingDistractors > 0) && (
                <div className="grid grid-cols-2 gap-3">
                    <button
                        id="chef-hint-btn"
                        disabled={remainingCount === 0}
                        onClick={onHint}
                        className="w-full border border-dashed border-zinc-600 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white py-3 rounded-xl flex flex-col md:flex-row items-center justify-center gap-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <div className="flex items-center gap-2">
                            <Phone size={14} />
                            <span className="text-xs font-bold uppercase tracking-wide">Call Sous Chef</span>
                        </div>
                        <span className="text-[9px] font-mono text-red-400">(-250 pts)</span>
                    </button>

                    <button
                        disabled={remainingDistractors === 0}
                        onClick={onTrim}
                        className="w-full border border-dashed border-zinc-600 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white py-3 rounded-xl flex flex-col md:flex-row items-center justify-center gap-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <div className="flex items-center gap-2">
                            <Scissors size={14} />
                            <span className="text-xs font-bold uppercase tracking-wide">Trim the Fat</span>
                        </div>
                        <span className="text-[9px] font-mono text-red-400">(-150 pts)</span>
                    </button>
                </div>
            )}
        </div>
    );
};
