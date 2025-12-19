
const fs = require('fs');
const path = 'src/data/ThePantry.ts';

try {
    let content = fs.readFileSync(path, 'utf8');

    // 1. Fix Imports
    if (!content.includes('Difficulty } from "../types"')) {
        content = content.replace('import { RoundData } from "../types";', 'import { RoundData, Difficulty } from "../types";');
        content = content.replace("import { RoundData } from '../types';", "import { RoundData, Difficulty } from '../types';");
    }

    // 2. Replace Difficulty Strings with Enum Constants (Flexible Regex)
    let count = 0;
    const replaceAndCount = (pattern, replacement) => {
        const regex = new RegExp(pattern, 'g');
        const match = content.match(regex);
        if (match) {
            count += match.length;
            content = content.replace(regex, replacement);
        }
    };

    replaceAndCount('"difficulty"\\s*:\\s*"Sous Chef"', '"difficulty": Difficulty.EASY');
    replaceAndCount('"difficulty"\\s*:\\s*"Chef de Partie"', '"difficulty": Difficulty.MEDIUM');
    replaceAndCount('"difficulty"\\s*:\\s*"Executive Chef"', '"difficulty": Difficulty.HARD');

    fs.writeFileSync(path, content);
    console.log(`Successfully updated ThePantry.ts types. Replaced ${count} occurrences.`);
} catch (error) {
    console.error('Error fixing pantry types:', error);
    process.exit(1);
}
