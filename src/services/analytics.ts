
// A lightweight wrapper for Analytics
// In the future, you can initialize Google Analytics (GA4) or PostHog here.

export const logEvent = (eventName: string, params: Record<string, any> = {}) => {
    // 1. Log to console in development
    if (import.meta.env.DEV) {
        console.log(`[Analytics] ${eventName}`, params);
    }

    // 2. Hook for Google Analytics (gtag)
    // Ensure you add the GA4 script tag to index.html for this to work
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, params);
    }
};

export const EVENTS = {
    GAME_START: 'game_start',
    GAME_COMPLETE: 'game_complete',
    ROUND_WIN: 'round_win',
    ROUND_LOSS: 'round_loss',
    AD_CLICK: 'ad_click',
    AFFILIATE_CLICK: 'affiliate_click',
    DONATION_CLICK: 'donation_click',
    SHARE: 'share_result'
};
