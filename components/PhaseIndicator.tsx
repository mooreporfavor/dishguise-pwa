
import React from 'react';
import { Difficulty } from '../types';
import { ChefHat, Trophy, Flame, Ticket } from 'lucide-react';

interface PhaseIndicatorProps {
  currentRound: number;
  totalRounds: number;
  score: number; // This is TOTAL score
  roundScore: number; // This is CURRENT ROUND POTENTIAL
  difficulty: Difficulty;
  streak: number;
}

export const PhaseIndicator: React.FC<PhaseIndicatorProps> = ({ 
  currentRound, 
  totalRounds,
  score,
  roundScore,
  difficulty,
  streak
}) => {
  // Color code the Ticket Value
  let ticketColor = "text-culinary-gold";
  if (roundScore < 3000) ticketColor = "text-orange-400";
  if (roundScore < 1500) ticketColor = "text-red-400";

  return (
    <div className="flex items-center justify-between mb-2 bg-culinary-panel/90 backdrop-blur-md p-3 rounded-xl border border-white/5 shadow-lg">
      
      {/* Left: Round Count */}
      <div className="flex items-center gap-3">
        <div className="bg-white/5 p-2 rounded-lg">
          <ChefHat size={18} className="text-zinc-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Round</span>
          <span className="text-white font-serif font-bold text-lg leading-none">
            {currentRound} <span className="text-zinc-600 text-sm">/ {totalRounds}</span>
          </span>
        </div>
      </div>

      {/* Middle: Ticket Value (The Discount Tracker) */}
      <div className="flex flex-col items-center">
         <div className="flex items-center gap-1.5 mb-1">
            <Ticket size={12} className={ticketColor} />
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Ticket Value</span>
         </div>
         <div className={`font-mono font-bold text-xl leading-none tracking-tight transition-colors duration-300 ${ticketColor}`}>
            {roundScore}
         </div>
      </div>

      {/* Right: Total Service Score */}
      <div className="flex items-center gap-3">
        <div className="text-right">
           <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Service Total</span>
           <div className="text-white font-mono font-bold text-lg leading-none">{score}</div>
        </div>
        <div className="bg-culinary-gold/10 p-2 rounded-lg relative">
          <Trophy size={18} className="text-culinary-gold" />
          {streak > 1 && (
             <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-zinc-900 animate-pulse">
                {streak}
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
