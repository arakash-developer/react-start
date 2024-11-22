#!/usr/bin/env node
const {execSync} = require('child_process');
const runCommand = command =>{
    try{
        execSync(`${command}`,{stdio: 'inherit'});
    }catch(e){
        console.error(`Failed to execute ${command}`,e);
        return false;
    }
    return true;
}
const repoName = process.argv[2];
const repoName1 = process.argv[1];
console.log(`repoName - ${repoName}`);
const gitCheckoutCommand = `git clone --dept 1 https://github.com/arakash-developer/reactjs-start ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
// console.log(`Cloning the repository with name ${repoName}`);
console.log(`Installing Packages for ${repoName} @akash.dev`);
const checkedOut =  runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);
console.log(`Installing dependencies for ${repoName} @akash.dev`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1); 
console.log(`Congratulation!! You are Ready @akash.dev`);
console.log(`cd ${repoName} && npm run dev or npm start @akash.dev`);
console.log(`repoName1 - ${repoName1}`);

