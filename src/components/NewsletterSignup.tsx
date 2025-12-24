import React, { useState } from 'react';
import { Mail, Check, Loader2, AlertCircle, ArrowRight } from 'lucide-react';

interface NewsletterSignupProps {
    formId?: string;
    className?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
    formId = "c3dee61335",
    className
}) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');

        try {
            const URL = '/api/subscribe';

            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Newsletter Error:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    if (status === 'success') {
        return (
            <div className={`bg-green-500/10 border border-green-500/20 rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 ${className}`}>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-in fade-in zoom-in duration-300">
                    <Check size={24} className="text-white" strokeWidth={3} />
                </div>
                <div>
                    <h3 className="text-green-400 font-bold text-lg">You're on the list!</h3>
                    <p className="text-green-400/80 text-xs uppercase tracking-widest mt-1">Keep an eye on your inbox</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`bg-zinc-900 border border-zinc-800 p-6 rounded-xl relative overflow-hidden group ${className}`}>
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-culinary-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-zinc-800 p-2 rounded-lg">
                        <Mail size={18} className="text-culinary-gold" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm uppercase tracking-wide">Don't Lose Your Streak 🔥 (v2.0)</h3>
                        <p className="text-zinc-400 text-xs">Get a daily reminder and a free hint for tomorrow's menu.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (status === 'error') setStatus('idle');
                            }}
                            placeholder="chef@example.com"
                            disabled={status === 'loading'}
                            className="w-full bg-black/30 border border-zinc-700 text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-culinary-gold focus:ring-1 focus:ring-culinary-gold transition-all placeholder:text-zinc-600 disabled:opacity-50"
                        />
                    </div>

                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-400 text-xs animate-in slide-in-from-top-1">
                            <AlertCircle size={12} />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-ulinary-gold hover:text-black transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-lg hover:shadow-white/10"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 size={14} className="animate-spin" />
                                <span>Joining...</span>
                            </>
                        ) : (
                            <>
                                <span>Subscribe</span>
                                <ArrowRight size={14} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};
