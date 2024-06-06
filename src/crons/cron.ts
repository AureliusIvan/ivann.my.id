import CronJob from "node-cron";

const initScheduledJobs = () => {
  // const backupDatabase = CronJob.schedule('0 0 * * *', () => {
  //   // console.log("Database backup started!");
  //   // // Add your custom logic here
  //   //
  //   // /**
  //   //  * For example, you can run a shell command to backup the database
  //   //  */
  //   // const { exec } = require('child_process');
  //   // exec('mongodump --db express --out /backup', (err: any, stdout: any, stderr: any) => {
  //   //   if (err) {
  //   //     console.error(err);
  //   //     return;
  //   //   }
  //   //   console.log(stdout);
  //   // });
  // });
}

export {initScheduledJobs}