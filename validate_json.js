const fs = require('fs');
try {
    const data = fs.readFileSync('src/data/pantry.json', 'utf8');
    JSON.parse(data);
    console.log('VALID_JSON');
} catch (e) {
    console.log('INVALID_JSON: ' + e.message);
}
