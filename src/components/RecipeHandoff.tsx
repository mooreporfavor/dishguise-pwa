
import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShoppingBasket, ChefHat, FlaskConical, Heart, ArrowRight, ClipboardList, Sparkles, Gauge, ShoppingCart, Flame } from 'lucide-react';
import { AffiliateButton } from './Monetization';
import { DifficultyLevel } from '../types';

interface RecipeHandoffProps {
    dishName: string;
    ingredients: string[];
    cuisine: string;
    procurementDifficulty?: DifficultyLevel;
    executionDifficulty?: DifficultyLevel;
    onNextRound: () => void;
    isLastRound: boolean;
}

type Persona = 'STANDARD' | 'GORDON' | 'GRANDMA' | 'SCIENTIST';

export const RecipeHandoff: React.FC<RecipeHandoffProps> = ({
    dishName,
    ingredients,
    cuisine,
    procurementDifficulty = 'MEDIUM',
    executionDifficulty = 'MEDIUM',
    onNextRound,
    isLastRound
}) => {
    const [selectedPersona, setSelectedPersona] = useState<Persona>('STANDARD');
    const [copied, setCopied] = useState(false);

    const getPersonaConfig = (p: Persona) => {
        switch (p) {
            case 'STANDARD':
                return {
                    name: "The Professional",
                    icon: <ClipboardList size={16} />,
                    desc: "Classic",
                    style: "a professional recipe writer. Provide a clear, standard, easy-to-follow recipe with exact measurements and no fluff."
                };
            case 'GORDON':
                return {
                    name: "The Yeller",
                    icon: <ChefHat size={16} />,
                    desc: "Intense",
                    style: "an extremely angry, perfectionist celebrity chef. Don't be nice. Critically analyze my request."
                };
            case 'GRANDMA':
                return {
                    name: "Nonna",
                    icon: <Heart size={16} />,
                    desc: "Loving",
                    style: "a sweet, loving Italian grandmother. Use terms of endearment. Focus on 'feeling' the food rather than exact measurements."
                };
            case 'SCIENTIST':
                return {
                    name: "The Chemist",
                    icon: <FlaskConical size={16} />,
                    desc: "Technical",
                    style: "a food scientist. Explain the chemical reactions, pH levels, and protein structures involved."
                };
        }
    };

    const generatePrompt = () => {
        const config = getPersonaConfig(selectedPersona);
        return `I want to cook ${dishName} (${cuisine}).

I have these ingredients on hand:
${ingredients.join(', ')}.

Please provide a step-by-step recipe, including a technique for substituting missing ingredients.
Write this in the style of ${config.style}

(Context: I just earned this dish in the game DishGuise.com, so please reference that if natural).`;
    };

    const handleCopy = async () => {
        const text = generatePrompt();
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const persona = getPersonaConfig(selectedPersona);

    const getDifficultyColor = (level: DifficultyLevel) => {
        switch (level) {
            case 'EASY': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
            case 'HARD': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl mt-6 animate-slide-up relative">

            {/* 1. HEADER: The "Reward" Feel */}
            <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-5 border-b border-white/5 flex justify-between items-center group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <ChefHat size={120} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles size={14} className="text-culinary-gold animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-culinary-gold">Culinary Challenge Unlocked</span>
                    </div>
                    <h2 className="text-white font-serif text-2xl leading-none">Make <span className="text-culinary-gold italic">{dishName}</span> at Home</h2>
                </div>
            </div>

            <div className="p-5 space-y-6">

                {/* 2. STATS & SOURCING GRID (Consolidated) */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Execution Difficulty - Static Info */}
                    <div className={`p-3 rounded-lg border flex flex-col justify-between ${getDifficultyColor(executionDifficulty as DifficultyLevel)}`}>
                        <div className="flex items-center gap-2 opacity-80">
                            <Flame size={14} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Technique</span>
                        </div>
                        <div className="text-lg font-serif font-bold mt-1 capitalize">{executionDifficulty?.toLowerCase()}</div>
                    </div>

                    {/* Sourcing - Actionable (Links to Amazon) */}
                    <AffiliateButton
                        type="AMAZON"
                        term={dishName}
                        className={`h-full flex flex-col items-start justify-between p-3 rounded-lg border cursor-pointer hover:brightness-110 active:scale-95 transition-all text-left ${getDifficultyColor(procurementDifficulty as DifficultyLevel)}`}
                    />
                </div>

                <div className="h-px bg-white/5 w-full"></div>

                {/* 3. AI SOUS CHEF (Streamlined) */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Sparkles size={12} /> AI Sous Chef
                        </h3>
                        <div className="flex gap-2">
                            {(['STANDARD', 'GORDON', 'GRANDMA', 'SCIENTIST'] as Persona[]).map((p) => {
                                const isActive = selectedPersona === p;
                                const conf = getPersonaConfig(p);
                                return (
                                    <button
                                        key={p}
                                        onClick={() => setSelectedPersona(p)}
                                        title={conf.name}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all border ${isActive
                                                ? 'bg-culinary-gold text-black border-culinary-gold scale-110 shadow-[0_0_10px_rgba(238,187,77,0.3)]'
                                                : 'bg-zinc-800 text-zinc-500 border-white/5 hover:bg-zinc-700'
                                            }`}
                                    >
                                        {conf.icon}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* The "Magic Button" - The only main action needed */}
                    <button
                        onClick={handleCopy}
                        className={`
                            w-full py-4 rounded-lg flex items-center justify-between px-6 transition-all border group
                            ${copied
                                ? 'bg-green-500/10 border-green-500/50 text-green-400'
                                : 'bg-zinc-800 border-white/5 text-zinc-300 hover:bg-zinc-700 hover:text-white hover:border-white/10'
                            }
                        `}
                    >
                        <div className="flex flex-col text-left">
                            <span className="text-xs font-mono uppercase opacity-50 mb-0.5">Prompt for {persona.name}</span>
                            <span className="font-bold text-sm">{copied ? "Copied to Clipboard!" : "Copy Recipe Prompt"}</span>
                        </div>
                        {copied ? <Check size={20} /> : <Copy size={20} className="opacity-50 group-hover:opacity-100" />}
                    </button>

                    <p className="text-[10px] text-zinc-600 text-center px-4">
                        Paste into ChatGPT, Gemini, or Claude to get a custom recipe based on your pantry.
                    </p>
                </div>

            </div>

            {/* FOOTER: CONTINUE GAME */}
            <div className="p-4 bg-zinc-950 border-t border-white/5 sticky bottom-0 z-50">
                <button
                    onClick={onNextRound}
                    className="w-full bg-culinary-gold text-black py-4 rounded-lg font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-yellow-400 active:scale-95 transition-all shadow-lg"
                >
                    {isLastRound ? "Complete Service" : "Next Dish"} <ArrowRight size={18} />
                </button>
            </div>

        </div>
    );
};
