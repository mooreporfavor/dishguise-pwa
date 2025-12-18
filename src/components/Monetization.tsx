
import React from 'react';
import { ShoppingBag, Plane, Coffee, ExternalLink, Utensils, ChefHat, ArrowRight } from 'lucide-react';
import { logEvent, EVENTS } from '../services/analytics';

// --- CONFIGURATION ---
// Replace these with your actual affiliate links
const CONFIG = {
    AMAZON_TAG: '',
    KOFI_USERNAME: 'dishguise',
    // Put your Instacart Referral / Affiliate Link here
    INSTACART_LINK: 'https://www.instacart.com',
    // Put a Masterclass or Udemy Cooking link here
    COURSE_LINK: 'https://www.masterclass.com/categories/culinary-arts',
};

interface AffiliateButtonProps {
    type: 'AMAZON' | 'DELIVERY' | 'TRAVEL';
    term: string; // The Dish Name or City Name
    country?: string;
    flag?: string;
    countryCode?: string; // NEW
    className?: string;
}

export const AffiliateButton: React.FC<AffiliateButtonProps> = ({ type, term, country, flag, countryCode, className }) => {
    let url = '';
    let icon = null;
    let label: React.ReactNode = '';

    const handleClick = () => {
        logEvent(EVENTS.AFFILIATE_CLICK, { type, term });
    };

    switch (type) {
        case 'AMAZON':
            const amzQuery = encodeURIComponent(`${term} ingredients and cookbook`);
            url = `https://www.amazon.com/s?k=${amzQuery}${CONFIG.AMAZON_TAG ? `&tag=${CONFIG.AMAZON_TAG}` : ''}`;
            icon = <ShoppingBag size={14} />;
            label = "Shop Ingredients";
            break;
        case 'DELIVERY':
            // Generic search on Instacart or DoorDash
            url = `${CONFIG.INSTACART_LINK}`;
            icon = <Utensils size={14} />;
            label = "Get Groceries";
            break;
        case 'TRAVEL':
            url = `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(term)}`;
            icon = <Plane size={14} />;
            label = (
                <span className="flex items-center gap-1">
                    Visit {term}{country ? `, ${country}` : ''}
                    {countryCode ? (
                        <img
                            src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png 2x`}
                            width="16"
                            alt={countryCode}
                            className="inline-block rounded-[1px]"
                        />
                    ) : (
                        <span>{flag}</span>
                    )}
                </span>
            );
            break;
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all transform hover:-translate-y-0.5 ${className}`}
        >
            {icon}
            {/* If label is a string, wrap it. If it's a node (Travel), render directly but ensure flex alignment */}
            {label}
            <ExternalLink size={10} className="opacity-50" />
        </a>
    );
};

export const DonationButton: React.FC = () => {
    if (!CONFIG.KOFI_USERNAME) return null;

    return (
        <a
            href={`https://ko-fi.com/${CONFIG.KOFI_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent(EVENTS.DONATION_CLICK, { platform: 'kofi' })}
            className="flex items-center gap-2 bg-[#FF5E5B] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-[#ff4542] hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
            <Coffee size={18} strokeWidth={2.5} />
            <span>Tip the Chef</span>
        </a>
    );
};

interface AdBannerProps {
    variant?: 'BANNER' | 'LARGE';
}

export const AdBanner: React.FC<AdBannerProps> = ({ variant = 'BANNER' }) => {
    // Strategy: We randomly rotate between "Grocery Delivery" and "Cooking Classes" 
    // This makes the app feel alive with ads, even if they are just direct affiliate links.

    // You can replace this simple random with a prop if you want to control which ad shows.
    const showGroceries = Math.random() > 0.5;
    const link = showGroceries ? CONFIG.INSTACART_LINK : CONFIG.COURSE_LINK;

    const handleAdClick = () => {
        logEvent(EVENTS.AD_CLICK, { variant, type: showGroceries ? 'groceries' : 'course' });
    };

    if (variant === 'LARGE') {
        return (
            <div className="w-full max-w-md mx-auto bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="bg-gradient-to-r from-culinary-gold to-yellow-600 p-1"></div>
                <div className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="bg-zinc-800 p-4 rounded-full">
                        {showGroceries ? <ShoppingBag size={32} className="text-culinary-gold" /> : <ChefHat size={32} className="text-culinary-gold" />}
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl text-white mb-2">
                            {showGroceries ? "Missing Ingredients?" : "Master the Kitchen"}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {showGroceries
                                ? "Get fresh produce and spices delivered to your door in as fast as 1 hour."
                                : "Learn from the world's best chefs. Streaming lessons on your schedule."}
                        </p>
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleAdClick}
                        className="w-full bg-white text-black font-bold py-3 rounded-lg uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                        {showGroceries ? "Start Shopping" : "Start Learning"} <ArrowRight size={14} />
                    </a>
                    <span className="text-[10px] uppercase text-zinc-600 tracking-widest">Sponsored</span>
                </div>
            </div>
        );
    }

    // Standard Banner (Bottom of screen)
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            onClick={handleAdClick}
            className="block w-full bg-gradient-to-r from-zinc-800 to-zinc-900 border-t border-white/5 py-3 px-4 hover:brightness-110 transition-all group"
        >
            <div className="flex items-center justify-between max-w-md mx-auto">
                <div className="flex items-center gap-3">
                    <div className="bg-black/30 p-2 rounded">
                        {showGroceries ? <ShoppingBag size={16} className="text-green-400" /> : <ChefHat size={16} className="text-culinary-gold" />}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Advertisement</span>
                        <span className="text-xs text-zinc-300 font-medium group-hover:text-white transition-colors">
                            {showGroceries ? "Get ingredients delivered today." : "Take your cooking to the next level."}
                        </span>
                    </div>
                </div>
                <ExternalLink size={12} className="text-zinc-600 group-hover:text-white" />
            </div>
        </a>
    );
};
