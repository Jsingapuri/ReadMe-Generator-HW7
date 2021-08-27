// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license !== 'none') {
  return `![](https://img.shields.io/badge/license-${license}-blue.svg)`;
} return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lMIT = 'https://opensource.org/licenses/MIT'
  let lBSD = 'https://opensource.org/licenses/BSD-3-Clause'
  let lApache = 'https://opensource.org/licenses/Apache-2.0'
  switch (license) {
    case 'MIT':
     return lMIT
    
    case 'BSD': 
      return lBSD
  
    case 'Apache': 
      return lApache

    default: 
    return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
    ${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ${renderLicenseBadge(answers.license)}
  # ${answers.title}
  ## Description
  ${answers.description}
  
  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Credits
  ${answers.contributors}
  
  
  ## License
  ${answers.license}
  ${renderLicenseSection(answers.license)}
  
  
  ## Test
  ${answers.test}

  ## Questions
  ${answers.questions}

`;
}

module.exports = generateMarkdown;
