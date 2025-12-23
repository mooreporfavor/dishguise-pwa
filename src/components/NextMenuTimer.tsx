import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const NextMenuTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);

            const diff = tomorrow.getTime() - now.getTime();

            if (diff <= 0) {
                return "00:00:00";
            }

            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);

            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        };

        // Initial set
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-zinc-900 border-2 border-dashed border-zinc-800 rounded-xl w-full">
            <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-widest mb-1">
                <Clock size={14} />
                <span>Next Menu</span>
            </div>
            <div className="text-4xl font-mono font-black text-white tracking-widest tabular-nums">
                {timeLeft}
            </div>
        </div>
    );
};
