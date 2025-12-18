/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                mono: ['"Space Mono"', 'monospace'],
            },
            colors: {
                'culinary-dark': '#121212',
                'culinary-panel': '#1e1e24',
                'culinary-gold': '#eebb4d',
                'culinary-gold-dim': '#b38b36',
                'culinary-cream': '#f4f4f0',
                'culinary-accent': '#ff6b6b',
                'culinary-success': '#4ade80',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'print-receipt': 'printReceipt 1s ease-out forwards',
                'stamp-slam': 'stampSlam 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                'indeterminate': 'indeterminate 1.5s infinite linear',
                'float-up': 'floatUp 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                shake: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                    '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                    '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
                },
                printReceipt: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                stampSlam: {
                    '0%': { transform: 'scale(3) rotate(-10deg)', opacity: '0' },
                    '100%': { transform: 'scale(1) rotate(-10deg)', opacity: '0.8' }
                },
                indeterminate: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                floatUp: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(-40px)', opacity: '0' }
                }
            }
        },
    },
    plugins: [],
}
