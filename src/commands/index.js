import importCommand from "./import";
import exportCommand from "./export";
import restoreCommand from "./restore";

const commands = [importCommand, exportCommand, restoreCommand];

export const registerCommands = program =>
    commands.forEach(registerCommand => registerCommand(program));
