// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',  
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
       type: 'input',
       name: 'description' ,
       message: 'what is your project description?',
    },
    {
       type: 'input',
       name: 'license' ,
       message: 'what is your project License?',
       default: 'M.I.T'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the use information?',
    },
    {   type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'testIntructions',
        message: 'What are the test instructions?',
    },

    ])
    .then((answers) => {
        const generateFile = generateMarkdown(answers);

        fs.writeFile("README.md", generateFile, (err) => 
            err ? console.log(err): console.log("File Succesfully Written!!")
        );
        
    })

}

// Function call to initialize app
init();
