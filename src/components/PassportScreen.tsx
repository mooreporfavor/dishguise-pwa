import React from 'react';
import { ArrowLeft, ChefHat, Award, MapPin } from 'lucide-react';
import { DishStamp, UserProfile } from '../types';

interface PassportScreenProps {
    userProfile: UserProfile;
    onBack: () => void;
}

export const PassportScreen: React.FC<PassportScreenProps> = ({ userProfile, onBack }) => {
    return (
        <div className="min-h-screen bg-culinary-dark text-culinary-cream flex flex-col items-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pt-4">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-2xl font-serif font-black uppercase tracking-wider text-culinary-gold">Culinary Passport</h1>
                    <div className="w-10"></div> {/* Spacer */}
                </div>

                {/* Profile Card */}
                <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 mb-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <ChefHat size={120} />
                    </div>

                    <div className="relative z-10 flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-culinary-gold rounded-full flex items-center justify-center text-black font-black text-2xl border-4 border-[#2a2a2a]">
                            {userProfile.level}
                        </div>
                        <div>
                            <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Current Rank</div>
                            <div className="text-2xl font-serif font-bold leading-none mb-1">{userProfile.title}</div>
                            <div className="text-xs font-mono text-zinc-400">XP: {userProfile.xp.toLocaleString()}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-black/20 p-2 rounded-lg">
                            <div className="text-culinary-gold font-black text-lg">{userProfile.collection.length}</div>
                            <div className="text-[9px] uppercase tracking-widest text-zinc-500">Dishes</div>
                        </div>
                        <div className="bg-black/20 p-2 rounded-lg">
                            <div className="text-green-500 font-black text-lg">{userProfile.stats?.perfectGames || 0}</div>
                            <div className="text-[9px] uppercase tracking-widest text-zinc-500">Perfect</div>
                        </div>
                        <div className="bg-black/20 p-2 rounded-lg">
                            <div className="text-orange-500 font-black text-lg">{userProfile.stats?.maxStreak || 0}</div>
                            <div className="text-[9px] uppercase tracking-widest text-zinc-500">Bests</div>
                        </div>
                    </div>
                </div>

                {/* Filters (Future) */}
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-2">
                    <button className="px-4 py-1.5 bg-culinary-gold text-black text-xs font-bold uppercase rounded-full whitespace-nowrap">
                        All Stamps
                    </button>
                    <button className="px-4 py-1.5 bg-white/10 text-zinc-400 text-xs font-bold uppercase rounded-full whitespace-nowrap hover:bg-white/20">
                        Regions
                    </button>
                    <button className="px-4 py-1.5 bg-white/10 text-zinc-400 text-xs font-bold uppercase rounded-full whitespace-nowrap hover:bg-white/20">
                        Perfect
                    </button>
                </div>

                {/* Stamps Grid */}
                <div className="grid grid-cols-2 gap-4 pb-20">
                    {userProfile.collection.map((stamp, i) => {
                        // Rich DishStamp
                        return (
                            <div key={stamp.id} className="aspect-[4/3] bg-[#f4f4f0] rounded-lg p-3 relative transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl group overflow-hidden">
                                {stamp.countryCode && (
                                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
                                        <img
                                            src={`https://flagcdn.com/w160/${stamp.countryCode.toLowerCase()}.png`}
                                            alt=""
                                            className="w-full h-full object-cover rounded-bl-3xl"
                                        />
                                    </div>
                                )}
                                <div className="absolute inset-0 border-2 border-dashed border-zinc-300 m-1 rounded-md pointer-events-none"></div>

                                <div className="h-full flex flex-col justify-between relative z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="bg-zinc-900 text-culinary-gold text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                                            {new Date(stamp.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                        </div>
                                        {stamp.score >= 4000 && <Award size={14} className="text-culinary-gold" />}
                                    </div>

                                    <div className="text-center my-auto">
                                        <div className="font-serif font-black text-zinc-900 leading-none text-base mb-1 group-hover:text-[#E04F26] transition-colors">
                                            {stamp.dishName}
                                        </div>
                                        <div className="flex justify-center items-center gap-1 text-[10px] text-zinc-500 font-mono uppercase">
                                            {stamp.countryCode && (
                                                <img
                                                    src={`https://flagcdn.com/w20/${stamp.countryCode.toLowerCase()}.png`}
                                                    width="12"
                                                    alt={stamp.countryCode}
                                                    className="inline-block rounded-[1px]"
                                                />
                                            )}
                                            <span>{stamp.score.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-8 flex justify-center items-end opacity-20">
                                        <div className="border-t-2 border-black w-full"></div>
                                    </div>
                                </div>

                                {/* Stamp Overlay Effect */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-red-900/20 rounded-full flex items-center justify-center transform -rotate-12 pointer-events-none">
                                    <div className="text-[8px] font-black text-red-900/20 uppercase">DishGuise</div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Empty State Fillers */}
                    {Array.from({ length: Math.max(0, 4 - userProfile.collection.length) }).map((_, i) => (
                        <div key={`empty-${i}`} className="aspect-[4/3] bg-white/5 rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center">
                            <div className="text-white/10">
                                <ChefHat size={32} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
