const fs = require('fs');
try {
    const data = fs.readFileSync('src/data/pantry.json', 'utf8');
    JSON.parse(data);
    console.log('JSON VALID');
} catch (error) {
    console.error('JSON INVALID:', error.message);
    process.exit(1);
}
