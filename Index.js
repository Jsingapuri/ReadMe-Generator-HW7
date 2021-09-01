// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the Title of your ReadMe?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the Description of your ReadMe?",
    },
    {
      type: "input",
      name: "installation",
      message: "What should the user know about installing this application?",
    },
    {
      type: "input",
      name: "usage",
      message: "What should the user know about how the application is used?",
    },
    {
      type: "list",
      name: "license",
      message: "What is the License",
      choices: ["MIT", "BSD", "Apache", "none",],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who helped create this application?",
    },
    {
      type: "input",
      name: "test",
      message: "What is the Test",
    },
    {
      type: "input",
      name: "questions",
      message: "What is your email?"
    }
  ]);
};

// TODO: Create a function to write README file
//function writeToFile("README.md", README) {}
// const generateREADME = (answers) =>
// `
// ${renderLicenseBadge(answers.license)}
// # ${answers.title}
// ## Description
// ${answers.description}

// ## Table of Contents (Optional)
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation
// ${answers.installation}

// ## Usage
// ${answers.usage}

// ## Credits
// ${answers.contributors}


// ## License
// ${answers.license}
// ${renderLicenseSection(answers.license)}


// ## Test
// ${answers.test}
// `;
// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((answers) => writeFileAsync("NEWREADME.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to NEWREADME.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();


//List and choices
//badges and licensings
//shields for badges