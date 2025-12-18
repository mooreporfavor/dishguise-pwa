const { exec } = require('child_process');
const fs = require('fs');

console.log("Starting build...");
exec('npm run build', (error, stdout, stderr) => {
    console.log("Build finished.");
    const content = `STDOUT:\n${stdout}\n\nSTDERR:\n${stderr}\n\nERROR:\n${error}`;
    fs.writeFileSync('build.log', content);
});
