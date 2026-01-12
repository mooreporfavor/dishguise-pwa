const AMAZON_TAG = import.meta.env.VITE_AMAZON_TAG || 'dishguise-20';
const VIATOR_PID = import.meta.env.VITE_VIATOR_PID || 'P00283404';

/**
 * Generates an Amazon search link for the given dish.
 * Format: https://www.amazon.com/s?k=${encodedDishName}+authentic+ingredients&tag=${tag}
 */
export const getAmazonLink = (dishName: string): string => {
    const encodedDishName = encodeURIComponent(dishName);
    return `https://www.amazon.com/s?k=${encodedDishName}+authentic+ingredients&tag=${AMAZON_TAG}`;
};

/**
 * Generates a Viator search link for the given origin/city.
 * Format: https://www.viator.com/searchResults/all?text=Food+Tours+in+${encodedOrigin}&pid=${pid}&medium=link
 */
export const getViatorLink = (originCity: string): string => {
    // Clean up origin (e.g. "Valencia, Spain" -> "Valencia")
    const cleanedOrigin = originCity.split(',')[0].trim();
    const encodedOrigin = encodeURIComponent(cleanedOrigin);
    return `https://www.viator.com/searchResults/all?text=Food+Tours+in+${encodedOrigin}&pid=${VIATOR_PID}&medium=link`;
};
