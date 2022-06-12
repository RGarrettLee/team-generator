const inquirer = require('inquirer'); // import libraries needed
const fs = require('fs');
const html = require('./src/generateHTML.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

function writeToFile(fileName, data) { // write to file function
    fs.writeFile(`./dist/${fileName}.html`, data, (err) => {
        err ? console.log(err) : console.log('HTML Generated Successfully');
    });
}

function init() { // main function to run the program
    if (process.argv[2] === 'test' || process.argv[2] === 'example') { // run example 
        const example = {
            manager: new Manager('Janice', 1, 'janice@company.com', 1),
            eng1: new Engineer('Brad', 2, 'brad@company.com', 'ItzBrad'),
            eng2: new Engineer('Chad', 3, 'chad@company.com', 'chadscode'),
            eng3: new Engineer('Tad', 4, 'tad@company.com', 'typertad'),
            intern: new Intern('Jerry', 5, 'jerry@company.com', 'MIT')
        }

        writeToFile('example', html(example));
        return;
    }
}


init();