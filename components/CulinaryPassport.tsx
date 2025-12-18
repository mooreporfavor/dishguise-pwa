
import React from 'react';
import { UserProfile } from '../types';
import { ChefHat, Star, Award, BookOpen, X } from 'lucide-react';

interface CulinaryPassportProps {
  profile: UserProfile;
  onClose: () => void;
}

export const CulinaryPassport: React.FC<CulinaryPassportProps> = ({ profile, onClose }) => {
  const nextLevelXp = (profile.level + 1) * 2000;
  const progressPercent = Math.min(100, (profile.xp / nextLevelXp) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#1a1a1e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header / ID Card */}
        <div className="bg-[#f4f4f0] p-6 text-zinc-900 relative">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-full">
            <X size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center border-4 border-culinary-gold text-culinary-gold">
               <ChefHat size={40} />
            </div>
            <div>
               <h2 className="font-serif font-black text-3xl uppercase tracking-tighter">Chef Passport</h2>
               <div className="flex items-center gap-2 mt-1">
                  <span className="bg-zinc-900 text-white px-2 py-0.5 rounded text-xs font-bold uppercase tracking-widest">
                    Level {profile.level}
                  </span>
                  <span className="font-serif italic text-lg">{profile.title}</span>
               </div>
            </div>
          </div>

          {/* XP Bar */}
          <div className="mt-6">
             <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest mb-1 opacity-60">
                <span>XP Progress</span>
                <span>{profile.xp} / {nextLevelXp}</span>
             </div>
             <div className="h-3 bg-zinc-300 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-culinary-gold transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercent}%` }}
                ></div>
             </div>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
             <div className="flex items-center gap-2 mb-4 text-white/50">
                <BookOpen size={16} />
                <span className="text-xs uppercase tracking-widest font-bold">Dish Collection ({profile.collection.length})</span>
             </div>

             {profile.collection.length === 0 ? (
                 <div className="text-center py-20 opacity-30">
                    <ChefHat size={64} className="mx-auto mb-4" />
                    <p className="font-serif text-xl">No dishes mastered yet.</p>
                    <p className="text-xs uppercase tracking-widest mt-2">Complete service to earn stamps</p>
                 </div>
             ) : (
                 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {profile.collection.slice().reverse().map((stamp) => {
                        const isPerfect = stamp.score >= 4500;
                        return (
                            <div key={stamp.id} className="aspect-square bg-[#f4f4f0] rounded p-2 flex flex-col items-center justify-center text-center shadow-lg relative transform hover:scale-105 transition-transform cursor-pointer group">
                                <div className="text-2xl mb-1">{stamp.flagEmoji}</div>
                                <div className="font-serif text-[10px] font-bold leading-tight line-clamp-2 text-zinc-900">
                                    {stamp.dishName}
                                </div>
                                
                                {/* Stamp Effect */}
                                <div className={`absolute inset-0 border-2 rounded opacity-50 ${isPerfect ? 'border-culinary-gold' : 'border-zinc-300'}`}></div>
                                {isPerfect && <div className="absolute -top-1 -right-1 text-culinary-gold"><Star size={12} fill="currentColor"/></div>}
                                
                                <div className="absolute bottom-1 right-1 text-[8px] font-mono text-zinc-400 opacity-0 group-hover:opacity-100">
                                    {new Date(stamp.date).toLocaleDateString(undefined, {month:'numeric', day:'numeric'})}
                                </div>
                            </div>
                        );
                    })}
                 </div>
             )}
        </div>

      </div>
    </div>
  );
};
