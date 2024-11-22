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
console.log(repoName);
const repoName2 = process.argv[1].split('\\');
repoName2.pop('cli.js');
// console.log(my);
// repoName2.push('a')
let newa = repoName2.join("/")
// console.log(repoName2);
console.log(newa);

// let mypath = `C:/Users/my-pc/Documents/GitHub/react-starter/a`;
const gitCheckoutCommand = `git clone https://github.com/arakash-developer/reactjs-start.git ${newa}`;
// const installDepsCommand = `cd ${repoName} && npm install`;
// console.log(`Cloning the repository with name ${repoName}`);
console.log(`Installing Packages for ${repoName} @akash.dev`);
const checkedOut =  runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);
console.log(`Installing dependencies for ${repoName} @akash.dev`);
// const installedDeps = runCommand(installDepsCommand);
// if(!installedDeps) process.exit(-1); 
console.log(`Congratulation!! You are Ready @akash.dev`);
console.log(`cd ${repoName} && npm run dev or npm start @akash.dev`);
