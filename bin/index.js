#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const projectName = process.argv[2] || "sequelize-app";
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`❌ Folder "${projectName}" already exists!`);
  process.exit(1);
}

console.log(`🚀 Creating new Sequelize backend project: ${projectName}`);

execSync(`git clone https://github.com/ibeh-promise/Sequelize-Backend-Template.git ${projectName}`, { stdio: "inherit" });

execSync(`rm -rf ${projectName}/.git`);

console.log(`✅ Done! cd ${projectName} && npm install`);
