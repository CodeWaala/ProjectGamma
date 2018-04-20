const args = ["run build"];
const opts = { stdio: "inherit", cwd: "client/haula", shell: true };
require("child_process").spawn("npm", args, opts);