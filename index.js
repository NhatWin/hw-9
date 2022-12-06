// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "Insert project title name",
    },
    {
        type: "input",
        name: "description",
        message: "Insert description",
    },
    {
        type: "input",
        name: "installation",
        message: "Insert installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Insert Usage"
    },
    {
        type: "input",
        name: "contributing",
        message: "Insert contribution",
    },
    {
        type: "input",
        name: "tests",
        message: "Insert test instuctions"
    },
    {
        type: "rawlist",
        name: "license",
        message: "pick License",
        choices: ["MIT","GPLv2","Apache", "GPLv3", "BSD 3-clause", "None"],
    }

];

const prompt = inquirer.createPromptModule();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown
    const info = generateMarkdown(data)
    fs.writeFile(fileName, 
    `${info}

## Description
${data.description}
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## Test
${data.tests}`, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(data => {
        writeToFile("README.md", data);  
    })
}

// Function call to initialize app
init();
