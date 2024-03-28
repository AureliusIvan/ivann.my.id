const fs = require('fs');
const path = require('path');


async function log_error(error: any, logDir: any = '@src/../logs/error.log') {
  // Log the error to the console
  console.error(error);
  // Save the error to a file
  const errorLogFile = path.join(logDir);
  const errorMessage = `${`error-` + new Date().toISOString()} - ${error.stack}\n`;

  fs.appendFile(errorLogFile, errorMessage, (err: any) => {
    if (err) {
      console.error(`Error occurred while writing to error log file: ${err}`);
    } else {
      console.log(`Error logged to ${errorLogFile}`);
    }
  });
}


export { log_error };