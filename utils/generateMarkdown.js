// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badgeMaker = require('badge-maker')


// let newLicense = new License()


function renderLicenseBadge(license) {
    const createBadge = {
        message: license,
        labelColor: '#555',        
    }

    return createBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = `[![${license.badge}]]`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let generatedFile = 
`# ${data.title}


    ${data.username}
    ${data.email}

## Table of Contents
    
[Description](#Description)
[Installation](#Installation)
[Usage Info](#Usage)
[contribution](#Contribution)
[Testing Instructions](#Test)
    

## Description
    ${data.description}

## Installation Instructions
    ${data.installation}

## Usage info
    ${data.usageInfo}

## Contribution
    ${data.contribution}

## Test Instructions
    ${data.testInstructions}    
    

    `
    return generatedFile;
}

module.exports = generateMarkdown;
