import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
    onBack: () => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 p-6 md:p-12 font-sans overflow-y-auto">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={onBack}
                    className="group mb-12 flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-culinary-gold transition-colors"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Menu
                </button>

                <header className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Privacy Policy</h1>
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Last Updated: December 2025</p>
                </header>

                <div className="space-y-8 leading-relaxed text-zinc-400">
                    <section className="bg-zinc-900/50 p-6 rounded-lg border border-white/5">
                        <h2 className="text-xl font-serif text-white mb-4">1. Cookies & Tracking</h2>
                        <p>
                            DishGuise serves as a demonstration of AI capabilities. We use cookies primarily for:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-culinary-gold">
                            <li>Essential game functionality (saving your daily progress and streak).</li>
                            <li>Anonymous analytics to understand potential user engagement.</li>
                            <li>Affiliate link tracking (supporting the chef via Amazon Fresh & Instacart).</li>
                        </ul>
                    </section>

                    <section className="bg-zinc-900/50 p-6 rounded-lg border border-white/5">
                        <h2 className="text-xl font-serif text-white mb-4">2. Data Collection</h2>
                        <p>
                            We do not collect personal identifyable information (PII) unless you explicitly provide it (e.g., via a newsletter signup form). Game data is stored locally on your device.
                        </p>
                    </section>
                </div>

                <footer className="mt-16 pt-8 border-t border-white/10 text-center text-zinc-600 text-xs font-mono">
                    &copy; 2025 DISHGUISE. ALL RIGHTS RESERVED.
                </footer>
            </div>
        </div>
    );
};
