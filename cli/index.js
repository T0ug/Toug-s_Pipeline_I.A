#!/usr/bin/env node

import { initCommand } from "./commands/init.js";
import { doctorCommand } from "./commands/doctor.js";
import { upgradeCommand } from "./commands/upgrade.js";

const command = process.argv[2];

switch (command) {
    case "init":
        await initCommand();
        break;
    case "doctor":
        await doctorCommand();
        break;
    case "upgrade":
        await upgradeCommand();
        break;
    default:
        console.log(`Toug's Pipeline I.A

Comandos disponíveis:
  toug-pipeline init
  toug-pipeline doctor
  toug-pipeline upgrade
`);
}