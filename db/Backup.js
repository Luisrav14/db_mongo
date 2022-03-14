const { spawn } = require("child_process");
const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  backupMongoDbData();
});

async function backupMongoDbData() {
  const child = await spawn("mongodump", ["--uri mongodb+srv://m001-student:m001-student@sandbox.jxnfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", `--archive ../backups`, "--gzip"]);

  child.stdout.on("data", (data) => {
    console.log("stdout:\n", data);
  });
  child.stderr.on("data", (data) => {
    console.log("stderr:\n", Buffer.from(data).toString());
  });
  child.on("error", (error) => {
    console.log("error:\n", error);
  });
  child.on("exit", (code, signal) => {
    if (code) console.log("Process exit with code:", code);
    else if (signal) console.log("Process killed with signal:", signal);
    else console.log("Backup is successfull ");
  });
}
