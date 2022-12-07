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
        type: "list",
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

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Contribution](#contribution)
- [Usage](#usage)
- [Test](#test)
${renderLicenseLink(data)}
    
## Installation
~~~
${data.installation}
~~~

## Contribution
${data.contributing}
    
## Usage
${data.usage}
    
## Test
${data.tests}

${renderLicenseMessage(data)}`, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(data => {
        writeToFile("generatedREADME.md", data);  
    })
}

const renderLicenseMessage = (data) => {
    if(data.license === "None") {
        return ""
    } else {
        return `## License
This project is license with ${data.license}`
    }
}

const renderLicenseLink = (data) => {
    if (data.license === "None") {
        return ""
    } else {
        return `- [License](#license)`
    }
}

// Function call to initialize app
init();
