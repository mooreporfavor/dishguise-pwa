
import React, { useEffect } from 'react';
import { ShoppingBag, Plane, Coffee, ExternalLink, Utensils, ChefHat, ArrowRight } from 'lucide-react';
import { logEvent, EVENTS } from '../services/analytics';
import { getAmazonLink, getViatorLink } from '../services/affiliateService';

// --- CONFIGURATION ---
const CONFIG = {
    KOFI_USERNAME: 'dishguise',
    INSTACART_LINK: 'https://www.instacart.com',
    COURSE_LINK: 'https://www.masterclass.com/categories/culinary-arts',
};

interface AffiliateButtonProps {
    type: 'AMAZON' | 'DELIVERY' | 'TRAVEL';
    term: string; // The Dish Name or City Name
    country?: string;
    flag?: string;
    countryCode?: string;
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
            url = getAmazonLink(term);
            icon = <ShoppingBag size={14} />;
            label = "Shop Ingredients";
            break;
        case 'DELIVERY':
            // Generic search on Instacart or DoorDash
            url = term ? `https://www.instacart.com/store/s?k=${encodeURIComponent(term)}` : `${CONFIG.INSTACART_LINK}`;
            icon = <Utensils size={14} />;
            label = "Get Groceries";
            break;
        case 'TRAVEL':
            url = getViatorLink(term);
            icon = <Plane size={14} />;
            label = (
                <span className="flex items-center gap-1">
                    Food Tours in {term.split(',')[0]}
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
            rel="nofollow sponsored"
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
            rel="nofollow sponsored"
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

    useEffect(() => {
        // Dynamically load the Viator script
        const script = document.createElement('script');
        script.src = "https://partners.vtrcdn.com/static/scripts/banners/banners.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup if needed, though usually scripts stick around
            document.body.removeChild(script);
        };
    }, []);

    // Viator Banner
    return (
        <div className="w-full flex justify-center my-4 overflow-hidden">
            <div
                data-id="viator-banner"
                data-partner-id="P00283404"
                data-url="https://www.viator.com/"
                data-banner-width="728"
                data-banner-height="90"
                data-banner-language="en"
                data-banner-selection="banner1"
            ></div>
        </div>
    );

    // Original fallback logic preserved in case we want to revert/mix
    /*
    const showGroceries = Math.random() > 0.5;
    const link = showGroceries ? CONFIG.INSTACART_LINK : CONFIG.COURSE_LINK;

    const handleAdClick = () => {
        logEvent(EVENTS.AD_CLICK, { variant, type: showGroceries ? 'groceries' : 'course' });
    };

    if (variant === 'LARGE') {
        // ...
    }
    // ...
    */
};
