
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
                    name: "The Standard",
                    icon: <ClipboardList size={20} />,
                    desc: "Clear. Concise. Classic.",
                    style: "a professional recipe writer. Provide a clear, standard, easy-to-follow recipe with exact measurements and no fluff."
                };
            case 'GORDON':
                return {
                    name: "The Yeller",
                    icon: <ChefHat size={20} />,
                    desc: "Ruthless perfectionism.",
                    style: "an extremely angry, perfectionist celebrity chef (like Gordon Ramsay). Don't be nice. Critically analyze my request."
                };
            case 'GRANDMA':
                return {
                    name: "Nonna",
                    icon: <Heart size={20} />,
                    desc: "Made with love.",
                    style: "a sweet, loving Italian grandmother. Use terms of endearment. Focus on 'feeling' the food rather than exact measurements."
                };
            case 'SCIENTIST':
                return {
                    name: "The Chemist",
                    icon: <FlaskConical size={20} />,
                    desc: "Molecular gastronomy.",
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

    const getDifficultyConfig = (level: DifficultyLevel) => {
        switch (level) {
            case 'EASY': return { color: 'text-green-500', bg: 'bg-green-500/10', label: 'Easy' };
            case 'MEDIUM': return { color: 'text-yellow-500', bg: 'bg-yellow-500/10', label: 'Medium' };
            case 'HARD': return { color: 'text-red-500', bg: 'bg-red-500/10', label: 'Hard' };
            default: return { color: 'text-yellow-500', bg: 'bg-yellow-500/10', label: 'Medium' };
        }
    };

    const getProcurementLabel = (level: DifficultyLevel) => {
        switch (level) {
            case 'EASY': return "Standard Grocer";
            case 'MEDIUM': return "Specialty Market";
            case 'HARD': return "Online / Rare";
            default: return "Specialty Market";
        }
    };

    const getExecutionLabel = (level: DifficultyLevel) => {
        switch (level) {
            case 'EASY': return "Simple Assembly";
            case 'MEDIUM': return "Requires Technique";
            case 'HARD': return "Master Class";
            default: return "Requires Technique";
        }
    };

    const procConfig = getDifficultyConfig(procurementDifficulty as DifficultyLevel);
    const execConfig = getDifficultyConfig(executionDifficulty as DifficultyLevel);

    return (
        <div className="w-full max-w-md mx-auto bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl mt-6 animate-slide-up relative">

            {/* QUICK CONTINUE BUTTON (Top) */}
            <button
                onClick={onNextRound}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all border-b border-white/5"
            >
                <span>Skip to Next Round</span> <ArrowRight size={14} />
            </button>

            {/* HEADER: DIRECT CTA */}
            <div className="bg-culinary-gold p-4 flex justify-between items-center">
                <div>
                    <h2 className="text-black font-black font-serif text-xl uppercase leading-none">Try making {dishName} at home!</h2>
                    <p className="text-black/70 font-mono text-[10px] uppercase tracking-widest mt-1">Mise en place • Preparation Phase</p>
                </div>
                <ShoppingBasket className="text-black opacity-80" size={24} />
            </div>

            <div className="p-5 space-y-6">

                {/* STEP 1: DIFFICULTY METERS (The Assessment) */}
                <div className="grid grid-cols-2 gap-3">
                    <div className={`p-3 rounded-lg border border-white/5 ${procConfig.bg}`}>
                        <div className="flex items-center gap-2 mb-1">
                            <ShoppingCart size={14} className={procConfig.color} />
                            <span className={`text-[10px] font-black uppercase tracking-widest ${procConfig.color}`}>Sourcing</span>
                        </div>
                        <div className="text-xs font-bold text-white leading-tight">{getProcurementLabel(procurementDifficulty as DifficultyLevel)}</div>
                    </div>

                    <div className={`p-3 rounded-lg border border-white/5 ${execConfig.bg}`}>
                        <div className="flex items-center gap-2 mb-1">
                            <Flame size={14} className={execConfig.color} />
                            <span className={`text-[10px] font-black uppercase tracking-widest ${execConfig.color}`}>Cooking</span>
                        </div>
                        <div className="text-xs font-bold text-white leading-tight">{getExecutionLabel(executionDifficulty as DifficultyLevel)}</div>
                    </div>
                </div>

                {/* STEP 2: MONETIZATION (The Hook) */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/80">
                            <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            <h3 className="font-serif font-bold text-lg">Stock Your Pantry</h3>
                        </div>
                    </div>

                    <p className="text-xs text-zinc-400 ml-8">Get the authentic ingredients delivered before you start.</p>
                    <div className="grid grid-cols-2 gap-3 ml-2">
                        <AffiliateButton type="AMAZON" term={dishName} className="bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10" />
                        <AffiliateButton type="DELIVERY" term={dishName} className="bg-green-900/30 hover:bg-green-900/50 text-green-400 border border-green-500/30" />
                    </div>
                </div>

                <hr className="border-white/5" />

                {/* STEP 3: THE GAMIFIED PROMPT (The Fun) */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white/80">
                        <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <h3 className="font-serif font-bold text-lg">Turn AI into your Sous Chef</h3>
                    </div>
                    <p className="text-xs text-zinc-400 ml-8">Select a personality below to generate a custom recipe guide.</p>

                    {/* Persona Selector */}
                    <div className="grid grid-cols-4 gap-2">
                        {(['STANDARD', 'GORDON', 'GRANDMA', 'SCIENTIST'] as Persona[]).map((p) => {
                            const isActive = selectedPersona === p;
                            const conf = getPersonaConfig(p);
                            return (
                                <button
                                    key={p}
                                    onClick={() => setSelectedPersona(p)}
                                    className={`
                                flex flex-col items-center justify-center gap-2 p-2 rounded-lg transition-all duration-200 border 
                                ${isActive
                                            ? 'bg-culinary-gold text-black border-culinary-gold shadow-lg scale-105 z-10'
                                            : 'bg-zinc-800 text-zinc-400 border-transparent hover:bg-zinc-700 hover:text-zinc-200'
                                        }
                            `}
                                >
                                    {conf.icon}
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-center leading-tight">{conf.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* The Prompt Card - Styled like Paper for Readability */}
                    <div className="bg-[#f4f4f0] text-zinc-900 rounded-sm p-4 shadow-lg relative transform rotate-[0.5deg]">
                        {/* Top Tape */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-200/80 opacity-80 rotate-[-1deg] shadow-sm z-20"></div>

                        <div className="flex justify-between items-start mb-2 border-b border-zinc-300 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                                Persona: {persona.name}
                            </span>
                            <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 font-bold">
                                <Sparkles size={10} className="text-purple-600" />
                                IMPROVISATION READY
                            </div>
                        </div>

                        {/* VISUALIZATION OF WHAT WILL BE COPIED */}
                        <div className="bg-white p-3 rounded border border-zinc-200 mb-3 space-y-2">
                            <p className="text-xs font-serif italic text-zinc-400 mb-1">Preview of generated request:</p>
                            <p className="text-sm font-medium text-zinc-800 leading-snug">
                                "I want to cook <strong>{dishName}</strong>... Write this in the style of {persona.style}"
                            </p>
                            <p className="text-xs text-green-700 font-bold bg-green-50 px-2 py-1 rounded inline-block">
                                + "Help me improvise if I'm missing ingredients."
                            </p>
                        </div>

                        <button
                            onClick={handleCopy}
                            className={`
                        w-full py-3 rounded flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-all shadow-sm
                        ${copied
                                    ? 'bg-green-600 text-white'
                                    : 'bg-zinc-900 text-white hover:bg-black'
                                }
                    `}
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? "Copied!" : "Copy Magic Prompt"}
                        </button>
                    </div>
                </div>

                {/* STEP 4: FAST TRAVEL (The Exit) */}
                <div className="space-y-2 pt-2">
                    <p className="text-[10px] text-center text-zinc-500 uppercase tracking-widest">Open AI Chef</p>
                    <div className="flex justify-center gap-3">
                        <a href="https://chatgpt.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded bg-zinc-800 border border-white/5 hover:bg-zinc-700 hover:border-green-500/30 transition-all group">
                            <ExternalLink size={14} className="text-zinc-500 group-hover:text-green-400" />
                            <span className="text-[10px] font-bold">ChatGPT</span>
                        </a>
                        <a href="https://gemini.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded bg-zinc-800 border border-white/5 hover:bg-zinc-700 hover:border-blue-500/30 transition-all group">
                            <ExternalLink size={14} className="text-zinc-500 group-hover:text-blue-400" />
                            <span className="text-[10px] font-bold">Gemini</span>
                        </a>
                        <a href="https://claude.ai" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded bg-zinc-800 border border-white/5 hover:bg-zinc-700 hover:border-orange-500/30 transition-all group">
                            <ExternalLink size={14} className="text-zinc-500 group-hover:text-orange-400" />
                            <span className="text-[10px] font-bold">Claude</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* FOOTER: CONTINUE GAME */}
            <div className="p-4 bg-zinc-950 border-t border-white/5 sticky bottom-0 z-50">
                <button
                    onClick={onNextRound}
                    className="w-full bg-gradient-to-r from-culinary-gold to-yellow-500 text-black py-5 rounded-xl font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(238,187,77,0.4)] border-2 border-yellow-400"
                >
                    {isLastRound ? "COMPLETE SERVICE" : "NEXT DISH"} <ArrowRight size={24} strokeWidth={3} />
                </button>
            </div>

        </div>
    );
};
