
import React, { useMemo } from 'react';
import { GamePhase, GameMode } from '../types';
import { Search, Flag, Globe2, Map, UtensilsCrossed, Plus, BookOpen, Lightbulb } from 'lucide-react';

interface IngredientsBoardProps {
  mainIngredients: string[];
  triviaClues: string[]; // NEW
  revealedCount: number;
  revealedTriviaCount: number; // NEW
  phase: GamePhase;
  mode: GameMode;
  cuisineName: string;
  regionName: string;
  category: string;
  flagEmoji: string;
  countryCode?: string; // NEW
  flagRevealed: boolean; 
  countryRevealed: boolean;
  resultStatus: 'CORRECT' | 'WRONG' | null;
  onRevealIngredient: () => void;
  onRevealTrivia: () => void; // NEW
  onRevealRegion: () => void;
  onRevealCountry: () => void;
  dishName?: string;
}

export const IngredientsBoard: React.FC<IngredientsBoardProps> = ({ 
  mainIngredients,
  triviaClues, 
  revealedCount,
  revealedTriviaCount,
  phase,
  mode,
  cuisineName,
  regionName,
  category,
  flagEmoji,
  countryCode,
  flagRevealed,
  countryRevealed,
  resultStatus,
  onRevealIngredient,
  onRevealTrivia,
  onRevealRegion,
  onRevealCountry,
  dishName
}) => {
  const isRoundOver = phase === GamePhase.REVEAL;
  
  const visibleIngredients = isRoundOver 
    ? mainIngredients 
    : mainIngredients.slice(0, revealedCount);
  
  const hiddenCount = mainIngredients.length - visibleIngredients.length;

  // Trivia Logic
  const visibleTrivia = isRoundOver ? triviaClues : triviaClues.slice(0, revealedTriviaCount);
  const hiddenTriviaCount = triviaClues.length - visibleTrivia.length;

  // Random Kitchen Shouts for "Order"
  const kitchenShouts = [
      "Table 5 is Waiting!",
      "Chef is Screaming!",
      "Hurry it up!",
      "On The Fly!",
      "VIP Customer!",
      "Don't mess this up!"
  ];
  
  // Memoize so it doesn't change on every render
  const randomShout = useMemo(() => kitchenShouts[Math.floor(Math.random() * kitchenShouts.length)], []);

  return (
    <div className="w-full pb-4 relative">
      
      {/* Header Section */}
      <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <UtensilsCrossed size={16} className="text-zinc-500" />
          <h3 className="font-serif text-lg text-zinc-300 tracking-wide">
            Investigation Board
          </h3>
        </div>
      </div>

      {/* SPLIT LAYOUT (Grid on Desktop, Stack on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* LEFT: KITCHEN TICKET (Ingredients) */}
        <div className="bg-[#e6e6e6] text-zinc-900 rounded-sm p-1 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] relative rotate-[1deg] transform transition-transform hover:rotate-0 duration-300 h-full flex flex-col">
            {/* Tape visual */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/80 opacity-80 rotate-[-2deg] shadow-sm z-20"></div>
            
            <div className="border border-zinc-300 p-4 flex-grow bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] relative overflow-hidden flex flex-col">
              
              {/* STAMP OVERLAY */}
              {resultStatus === 'CORRECT' && (
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="border-4 border-green-600 text-green-600 px-6 py-2 font-black text-3xl uppercase tracking-widest opacity-0 animate-stamp-slam -rotate-12" style={{ mixBlendMode: 'multiply' }}>
                        COMPLETE
                    </div>
                </div>
              )}
              {resultStatus === 'WRONG' && (
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="border-4 border-red-600 text-red-600 px-6 py-2 font-black text-3xl uppercase tracking-widest opacity-0 animate-stamp-slam rotate-12" style={{ mixBlendMode: 'multiply' }}>
                        SENT BACK
                    </div>
                </div>
              )}

              {/* Ticket Header */}
              <div className="border-b-2 border-dashed border-zinc-400/50 pb-3 mb-3 flex justify-between items-end">
                <div className="flex flex-col">
                   {isRoundOver && dishName ? (
                      <>
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-green-700">Order Identified</span>
                        <span className="font-serif font-bold text-xl leading-none mt-1 text-black" style={{fontFamily: '"Kalam", cursive, serif'}}>
                            {dishName}
                        </span>
                      </>
                  ) : (
                      <>
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-500">{randomShout}</span>
                        <span className="font-serif font-bold text-lg leading-none mt-1 uppercase">{category}</span>
                      </>
                  )}
                </div>
                <div className="text-right">
                   <div className="font-mono text-[10px] text-zinc-500">PREP LIST</div>
                </div>
              </div>

              {/* Ingredients List */}
              <ul className="space-y-2 mb-4 relative z-0 flex-grow">
                {visibleIngredients.map((ing, idx) => (
                    <li 
                        key={`main-${idx}`} 
                        className="flex items-start gap-3 animate-slide-up"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-black/80"></span>
                      <span className="font-mono text-sm font-bold text-zinc-800 uppercase tracking-tight relative leading-tight">
                        {ing}
                      </span>
                    </li>
                ))}
                
                {/* Placeholders */}
                {!isRoundOver && hiddenCount > 0 && Array.from({ length: hiddenCount }).map((_, idx) => (
                    <li key={`placeholder-${idx}`} className="flex items-center gap-3 opacity-30">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0"></span>
                        <span className="font-mono text-sm text-zinc-500 italic">???</span>
                    </li>
                ))}
              </ul>

              {/* Reveal Next Ingredient Button */}
              {!isRoundOver && hiddenCount > 0 && (
                  <button 
                    onClick={onRevealIngredient}
                    className="w-full border border-dashed border-zinc-400 bg-white/50 hover:bg-white text-zinc-600 hover:text-zinc-900 py-2 rounded flex items-center justify-center gap-2 transition-all text-xs font-bold uppercase tracking-wide mt-auto"
                  >
                    <Plus size={14} />
                    Reveal Item (-150 pts)
                  </button>
              )}
            </div>
        </div>

        {/* RIGHT: FIELD NOTES (Trivia/Facts) */}
        <div className="bg-[#2a2a2e] text-culinary-cream rounded-lg p-1 shadow-lg relative border border-white/10 flex flex-col h-full">
            {/* Notebook Ring Visuals */}
            <div className="absolute top-4 left-2 md:-left-3 w-4 h-4 bg-zinc-800 rounded-full z-20 border border-white/20 hidden md:block"></div>
            <div className="absolute bottom-4 left-2 md:-left-3 w-4 h-4 bg-zinc-800 rounded-full z-20 border border-white/20 hidden md:block"></div>
            
            <div className="p-4 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] flex-grow flex flex-col rounded border border-white/5">
                 <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2 text-culinary-gold/80">
                        <BookOpen size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Field Notes</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">CONFIDENTIAL</span>
                 </div>

                 <ul className="space-y-3 flex-grow">
                    {visibleTrivia.map((clue, idx) => (
                        <li key={`trivia-${idx}`} className="flex gap-3 animate-fade-in">
                            <div className="mt-1 min-w-[16px] h-[16px] rounded-full bg-culinary-gold/20 flex items-center justify-center text-[10px] font-bold text-culinary-gold">
                                {idx + 1}
                            </div>
                            <p className="text-sm font-serif text-zinc-300 leading-snug italic">"{clue}"</p>
                        </li>
                    ))}

                    {/* Hidden Hints */}
                    {!isRoundOver && hiddenTriviaCount > 0 && Array.from({ length: hiddenTriviaCount }).map((_, idx) => (
                        <li key={`hidden-triv-${idx}`} className="flex gap-3 opacity-30">
                             <div className="mt-1 w-4 h-4 rounded-full border border-white/20"></div>
                             <div className="h-4 bg-white/10 rounded w-3/4"></div>
                        </li>
                    ))}
                 </ul>

                 {/* Reveal Button */}
                 {!isRoundOver && hiddenTriviaCount > 0 && (
                      <button 
                        onClick={onRevealTrivia}
                        className="w-full mt-auto border border-zinc-600 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-culinary-gold py-2 rounded flex items-center justify-center gap-2 transition-all text-xs font-bold uppercase tracking-wide"
                      >
                        <Lightbulb size={14} />
                        Reveal Clue (-100 pts)
                      </button>
                 )}
            </div>
        </div>

      </div>

      {/* BOTTOM: GEOGRAPHY (Optional) */}
      <div className="relative mt-4 space-y-4">
        {/* Geography Hints */}
        <div className="grid grid-cols-2 gap-3">
            
            {/* Region Hint */}
            <div className={`bg-zinc-800/50 rounded-lg p-3 flex flex-col items-center justify-center gap-2 transition-all min-h-[80px] ${flagRevealed || isRoundOver ? 'border-culinary-gold/30 border' : 'border border-white/5'}`}>
                {flagRevealed || isRoundOver ? (
                    <div className="flex flex-col items-center animate-fade-in">
                            <Map size={20} className="text-culinary-gold mb-1 opacity-80" />
                            <span className="text-xs font-bold text-white text-center leading-tight">{regionName}</span>
                    </div>
                ) : (
                    <button 
                        onClick={onRevealRegion}
                        className="w-full h-full flex flex-col items-center justify-center gap-1 group"
                    >
                        <Map size={16} className="text-zinc-600 group-hover:text-culinary-gold transition-colors" />
                        <div className="text-[10px] font-bold text-zinc-500 group-hover:text-zinc-300 mt-1">REGION</div>
                        <span className="text-[10px] font-bold text-red-900/70 group-hover:text-red-500/70 border border-red-900/20 px-1.5 py-0.5 rounded">-400</span>
                    </button>
                )}
            </div>

            {/* Country & Flag Hint */}
            <div className={`bg-zinc-800/50 rounded-lg p-3 flex flex-col items-center justify-center gap-2 transition-all min-h-[80px] ${countryRevealed || isRoundOver ? 'border-culinary-gold/30 border' : 'border border-white/5'}`}>
                {countryRevealed || isRoundOver ? (
                    <div className="flex flex-col items-center animate-fade-in">
                            {countryCode ? (
                                <img 
                                    src={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`}
                                    alt={cuisineName}
                                    className="w-8 h-auto drop-shadow-md animate-shake mb-1"
                                />
                            ) : (
                                <span className="text-2xl drop-shadow-md animate-shake mb-1">{flagEmoji}</span>
                            )}
                            <span className="text-xs font-serif font-bold text-culinary-cream text-center leading-tight">{cuisineName}</span>
                    </div>
                ) : (
                    <button 
                        disabled={!flagRevealed}
                        onClick={onRevealCountry}
                        className={`w-full h-full flex flex-col items-center justify-center gap-1 group ${!flagRevealed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <Globe2 size={16} className="text-zinc-600 group-hover:text-culinary-gold transition-colors" />
                            <div className="text-[10px] font-bold text-zinc-500 group-hover:text-zinc-300 mt-1">ORIGIN</div>
                        <span className="text-[10px] font-bold text-red-900/70 group-hover:text-red-500/70 border border-red-900/20 px-1.5 py-0.5 rounded">-800</span>
                    </button>
                )}
            </div>
        </div>
      </div>

    </div>
  );
};
