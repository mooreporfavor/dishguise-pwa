import React from 'react';
import { AffiliateButton } from './Monetization';

interface AffiliateRowProps {
    dishName: string;
    origin: string; // "City, Country" or just "Country"
    countryCode?: string;
    className?: string;
}

export const AffiliateRow: React.FC<AffiliateRowProps> = ({ dishName, origin, countryCode, className }) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 w-full ${className || ''}`}>
            <AffiliateButton
                type="AMAZON"
                term={dishName}
                className="bg-zinc-800 text-white border border-white/10 hover:bg-zinc-700"
            />
            <AffiliateButton
                type="TRAVEL"
                term={origin}
                countryCode={countryCode}
                className="bg-zinc-800 text-white border border-white/10 hover:bg-zinc-700"
            />
        </div>
    );
};
