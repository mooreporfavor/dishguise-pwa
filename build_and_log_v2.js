const { execSync } = require('child_process');
const fs = require('fs');
const path = 'C:\\Users\\moore\\.gemini\\antigravity\\brain\\84745ebe-8ae4-4788-9015-71687ca6e2bf\\build_error.log';

try {
    const output = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
    fs.writeFileSync(path, 'SUCCESS:\n' + output);
} catch (e) {
    fs.writeFileSync(path, 'ERROR:\n' + e.stdout + '\nSTDERR:\n' + e.stderr);
}
