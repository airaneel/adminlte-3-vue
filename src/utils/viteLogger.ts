import { Logger, LogType, LogErrorOptions, LogOptions } from 'vite';

function createViteLogger(): Logger {
    let hasWarned = false;
    

    const formatMessage = (type: LogType, msg: string): string => {
        const date = new Date();
        const prefix = `RDH [${date.toLocaleTimeString()}] `;
        return `${prefix}[${type.toUpperCase()}] ${msg}`;
    };

    return {
        info(msg: string, options?: LogOptions): void {
            console.info(formatMessage('info', msg, options));
        },
        warn(msg: string, options?: LogOptions): void {
            console.warn(formatMessage('warn', msg, options));
            hasWarned = true;
        },
        warnOnce(msg: string, options?: LogOptions): void {
            if (!hasWarned) {
                this.warn(msg, options);
            }
        },
        error(msg: string, options?: LogErrorOptions): void {
            console.error(formatMessage('error', msg, options));
        },
        clearScreen(type: LogType): void {
            console.clear();
        },
        hasErrorLogged(error: Error): boolean {
            return false; // Implement error logging check if needed
        },
        hasWarned
    };
}

export default createViteLogger;
