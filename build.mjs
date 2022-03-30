import fs from 'node:fs';
import rl from 'node:readline';
import cp from 'node:child_process';

for await (const i of rl.createInterface(fs.createReadStream(process.argv[2]))) {
    const [dest, src, ...args] = i.split(',');

    console.error(`${src.trim()} => ${dest.trim()}`);

    const proc = cp.spawn('node', [process.env.TEMPLATE, ...args.map(i => i.split(':').map(i => decodeURIComponent(i.trim()))).flat(1)], {
        cwd: process.cwd(),
        env: process.env
    });

    proc.on('exit', code => code != 0 ?? new Promise(() => process.exit(code)));

    proc.stdout.pipe(fs.createWriteStream(dest.trim()));
    proc.stderr.pipe(process.stderr);
    fs.createReadStream(src.trim()).pipe(proc.stdin);
}