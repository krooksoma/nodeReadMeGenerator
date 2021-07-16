// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badgeMaker = require('badge-maker')


// let newLicense = new License()


// function renderLicenseBadge(license) {
//     const createBadge = {``
        

//     return createBadge;
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//     let licenseSection = `[![${license.badge}]]`
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let generatedFile = 
`![badge](https://img.shields.io/static/v1?label=license&message=${data.license}&color=<green>)

# ${data.title}


    
    

## Table of Contents
    
[Description](#description)
[Installation](#installation)
[Usage Info](#usage)
[contribution](#contribution)
[Testing Instructions](#test)
[License](#license)
[Questions](#questions)
    

## Description
    ${data.description}.

## Installation Instructions
    ${data.installation}.

## Usage info
    ${data.usageInfo}.

## Contribution
    ${data.contribution}.

## Test Instructions
    ${data.testInstructions}.    

## License
    This project is covered under ${data.license} license.

## Questions
    For questions please refer to 
    ![link](https://github.com${data.github})  
    or
    ${data.email}
    `
    return generatedFile;
}

module.exports = generateMarkdown;
