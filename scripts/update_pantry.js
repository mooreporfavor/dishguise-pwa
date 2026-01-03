
import { readFileSync, writeFileSync } from 'fs';
const path = 'src/data/pantry.json';

try {
    const content = readFileSync(path, 'utf8');
    // Global replace
    const newContent = content.replace(/Chef de Partie/g, 'Head Chef');
    writeFileSync(path, newContent);
    console.log('Successfully updated pantry.json');
} catch (error) {
    console.error('Error updating pantry.json:', error);
}
