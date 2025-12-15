import {spawn} from "child_process"
import path from "path";
import { fileURLToPath } from "url";

// Create __dirname manually (ESM fix)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pythonFile = path.resolve(__dirname, "Agent", "main.py");

const pythonAgent=spawn('python',[pythonFile])
// std out err
pythonAgent.stderr.on('data',(err)=>{
const error=err.toString()
    console.log(`error occured in the agent: ${error}`)
})

pythonAgent.on('close',(code)=>{
    console.log(`code stoped on the: ${code}`)
})

export const Agentparams = (prompt) => {
  return new Promise((resolve, reject) => {

    pythonAgent.stdout.once("data", (data) => {
      try {
        const parsed = JSON.parse(data.toString());
        resolve(parsed.output);   // whatever your python sends
      } catch (err) {
        reject("Invalid JSON from Python");
      }
    });

    pythonAgent.stdin.write(JSON.stringify({ input: prompt }) + "\n");
  });
};
