// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Project_title",
        message: "Insert project title name",
    },
    {
        type: "input",
        name: "Description",
        message: "Insert description",
    },
    {
        type: "input",
        name: "Installation",
        message: "Insert installation instructions"
    },
    {
        type: "input",
        name: "Usage",
        message: "Insert Usage"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Insert contribution",
    },
    {
        type: "input",
        name: "Tests",
        message: "Insert test instuctions"
    },
    {
        type: "rawlist",
        name: "License",
        message: "pick License",
        choices: ["MIT","GPLv2","Apache", "GPLv3", "BSD 3-clause"],
    }

];

const prompt = inquirer.createPromptModule();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(data => {
        writeToFile("README.md", data);
    })
}

// Function call to initialize app
init();
