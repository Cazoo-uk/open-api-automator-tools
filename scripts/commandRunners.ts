import { exec as rawExec, spawn } from 'child_process';
import util from 'util';

const exec = util.promisify(rawExec);

export function runAndLetRun(command: string): void {
    const proc = spawn(command.split(' ')[0], command.split(' ').slice(1));
    proc.stdout.on('data', data => console.log(`[${command}]: ${data}`));
    proc.stderr.on('data', data => console.error(`[${command}] ERROR: ${data}`));
    proc.on('error', data => console.error(`[${command}] ERROR: ${data.message}`));
    proc.on('close', code => console.log(`[${command}]: Process exited with code ${code}`));
}

export async function runAndWait(command: string): Promise<void> {
    const { stderr, stdout } = await exec(command);

    if (stderr) {
        console.error(`[${command}] ERROR: ${stderr}`);
    }
    if (stdout) {
        console.log(`[${command}]: ${stdout}`);
    }
}
