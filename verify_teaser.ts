
import { getTomorrowTeaser } from './src/services/gameService';
import { THE_PANTRY } from './src/data/ThePantry';

// Mocking the date to ensure we hit a valid pantry entry if needed, 
// but let's try with the real function first.

console.log("--- Testing Teaser Logic ---");
const teaser = getTomorrowTeaser();
console.log("Teaser Result:", teaser);

if (teaser) {
    console.log("SUCCESS: Teaser found.");
} else {
    // Check if tomorrow exists in pantry
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    console.log(`Checking pantry for date: ${tomorrowStr}`);
    if (THE_PANTRY[tomorrowStr]) {
        console.error("FAILURE: Pantry has data but teaser returned null.");
    } else {
        console.warn("WARNING: No data for tomorrow in pantry. This is expected if local data is stale.");
    }
}
