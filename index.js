const inquirer = require('inquirer'); // import libraries needed
const fs = require('fs');
const html = require('./src/generateHTML.js');

function writeToFile(fileName, data) { // write to file function
    fs.writeFile(`./dist/${fileName}.html`, data, (err) => {
        err ? console.log(err) : console.log('HTML Generated Successfully');
    });
}

function init() { // main function to run the program
    if (process.argv[2] === 'test' || process.argv[2] === 'example') { // run example 
        const example = {

        }

        writeToFile('example', example);
    }
}


init();