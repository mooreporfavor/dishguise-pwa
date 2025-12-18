
import React, { useEffect, useState } from 'react';
import { ChefHat } from 'lucide-react';

interface LogoIntroProps {
    onComplete: () => void;
}

export const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Trigger start of animations
        requestAnimationFrame(() => setMounted(true));

        // End animation sequence - Faster duration (1.2s)
        const timer = setTimeout(onComplete, 1200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-culinary-dark flex flex-col items-center justify-center overflow-hidden cursor-wait">
            {/* Subtle Radial Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-culinary-dark to-black opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Icon Reveal */}
                <div className="flex items-end gap-1 mb-4 overflow-hidden p-1">
                    <ChefHat
                        className={`text-culinary-gold w-14 h-14 transition-all duration-[600ms] cubic-bezier(0.22, 1, 0.36, 1) ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        strokeWidth={1.5}
                    />
                </div>

                {/* Text Reveal */}
                <h1 className="text-6xl md:text-8xl font-serif tracking-tighter flex items-center overflow-hidden relative px-6 py-2">
                    {/* Dish (White) */}
                    <span className={`inline-block transition-all duration-[500ms] delay-100 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} text-culinary-cream`}>
                        Dish
                    </span>

                    {/* Guise (Gold Italic) */}
                    <span className={`inline-block transition-all duration-[500ms] delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} text-culinary-gold italic ml-2`}>
                        Guise
                    </span>
                </h1>

                {/* Divider Line Growth */}
                <div className={`h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-8 rounded-full overflow-hidden transition-all duration-[600ms] delay-300 ease-out ${mounted ? 'w-48 opacity-50' : 'w-0 opacity-0'}`}></div>

                {/* Subtitle Slide Up */}
                <p className={`mt-5 text-xs font-mono uppercase tracking-[0.4em] text-zinc-500 transition-all duration-500 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Culinary Deduction
                </p>
            </div>
        </div>
    );
};
