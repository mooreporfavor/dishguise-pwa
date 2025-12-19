const fs = require('fs');
const path = require('path');

// Read the TS file
const filePath = path.join(__dirname, 'src', 'data', 'ThePantry.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Quick and dirty regex extraction of the JS object
// This avoids compiling TS. We assume standard formatting from the generator.
// Find all date keys: "YYYY-MM-DD": {
const dateRegex = /"(\d{4}-\d{2}-\d{2})":\s*\{/g;
let match;
const dates = [];

while ((match = dateRegex.exec(content)) !== null) {
    dates.push({ date: match[1], index: match.index });
}

console.log(`Found ${dates.length} date entries.`);

// For each date, count occurrences of "targetDish" inside its block
for (let i = 0; i < dates.length; i++) {
    const currentDate = dates[i];
    const nextDate = dates[i + 1];
    const endIndex = nextDate ? nextDate.index : content.length;

    const block = content.substring(currentDate.index, endIndex);

    // Count difficulties
    const easyCount = (block.match(/dayId":\s*".*?-EASY"/g) || []).length;
    const medCount = (block.match(/dayId":\s*".*?-MEDIUM"/g) || []).length;
    const hardCount = (block.match(/dayId":\s*".*?-HARD"/g) || []).length;

    const status = (easyCount === 5 && medCount === 5 && hardCount === 5) ? "OK" : "INCOMPLETE";

    console.log(`[${currentDate.date}] Status: ${status} (E:${easyCount}/5, M:${medCount}/5, H:${hardCount}/5)`);
}
