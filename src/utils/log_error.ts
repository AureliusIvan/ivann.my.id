import fs from 'fs';
import path from "path";

async function log_error(
    error: any,
    logDir: any = `${__dirname}/../logs/`
): Promise<void> {
    console.error(error);
    const errorLogFile = path.join(logDir);
    const errorMessage = `${`error-` + new Date().toISOString()} - ${error.stack}\n`;

    fs.appendFile(
        errorLogFile,
        errorMessage,
        (err: any): void => {
        if (err) {
            console.error(`Error occurred while writing to error log file: ${err}`);
        } else {
            console.log(`Error logged to ${errorLogFile}`);
        }
    });
}

export {log_error};