const { spawn } = require('child_process');
const fs = require('fs');

const logStream = fs.createWriteStream('build_debug.log');

const child = spawn('npm.cmd', ['run', 'build'], {
    cwd: process.cwd(),
    shell: true
});

child.stdout.on('data', (data) => {
    logStream.write('STDOUT: ' + data.toString());
});

child.stderr.on('data', (data) => {
    logStream.write('STDERR: ' + data.toString());
});

child.on('close', (code) => {
    logStream.write(`EXIT CODE: ${code}`);
    logStream.end();
});
