import program from "commander";
import { handleArguments } from "../globalFlags";
import { makeArchive } from "./import";

const main = async () => {
  const { agent, path, parent } = await handleArguments(program);
  const agentContent = await makeArchive(path);

  // Make Request
  const [operation] = await agent.restoreAgent({ parent, agentContent });
  await operation.promise();
};

const attachCommand = program => {
  program
    .command("restore [path]")
    .description(
      "Zips and imports the files at the specified path into the dialogflow agent"
    )
    .action(() => {
      main();
    });
};

export default attachCommand;
