import fs from 'fs';
import path from "path";

async function log_error(
    error: any,
    logDir: any = `${__dirname}/../logs/`
): Promise<void> {
  console.error(error);
  // const errorLogFile = path.join(logDir);
  // const errorMessage = `${`error-` + new Date().toISOString()} - ${error.stack}\n`;
}

export {log_error};