const inquirer = require('inquirer'); // import libraries needed
const fs = require('fs');
const html = require('./src/generateHTML.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let team = {manager: undefined, engineers: [], interns: []}; // create new object to hold the inputted team

function writeToFile(fileName, data) { // write to file function
    fs.writeFile(`./dist/${fileName}.html`, data, (err) => {
        err ? console.log(err) : console.log('HTML Generated Successfully');
    });
}

async function addMembers(question) { // loops through inquirer prompts to allow users to enter as many members as they want
    return inquirer
        .prompt(question)
        .then(response => {
            switch (response.role) {
                case 'Done': // when done, generate HTML
                    writeToFile('index', html(team));
                    return;
                case 'Engineer': // add an engineer role to the team
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'Enter engineer\'s name',
                                name: 'name'
                            },
                            {
                                type: 'input',
                                message: 'Enter engineer\'s ID',
                                name: 'id'
                            },
                            {
                                type: 'input',
                                message: 'Enter engineer\'s email',
                                name: 'email' 
                            },
                            {
                                type: 'input',
                                message: 'Enter engineer\'s github username',
                                name: 'github'
                            }
                        ])
                        .then(response => {
                            team.engineers.push(new Engineer(response.name, response.id, response.email, response.github));
                            return addMembers(question);
                        });
                    break;
                case 'Intern': // add an intern role to the team
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: 'Enter intern\'s name',
                                name: 'name'
                            },
                            {
                                type: 'input',
                                message: 'Enter intern\'s ID',
                                name: 'id'
                            },
                            {
                                type: 'input',
                                message: 'Enter intern\'s email',
                                name: 'email' 
                            },
                            {
                                type: 'input',
                                message: 'Enter intern\'s school',
                                name: 'school'
                            }
                        ])
                        .then(response => {
                            team.interns.push(new Intern(response.name, response.id, response.email, response.school));
                            return addMembers(question);
                        });
                    break;
            }
        })
}

function init() { // main function to run the program
    if (process.argv[2] === 'test' || process.argv[2] === 'example') { // run example 
        const example = {
            manager: new Manager('Janice', 1, 'janice@company.com', 1),
            engineers: [new Engineer('Brad', 2, 'brad@company.com', 'ItzBrad'),
            new Engineer('Chad', 3, 'chad@company.com', 'chadscode'),
            new Engineer('Tad', 4, 'tad@company.com', 'typertad')],
            interns: [new Intern('Jerry', 5, 'jerry@company.com', 'MIT')]
        }

        writeToFile('example', html(example));
        return;
    }

    inquirer // gets initial manager input
    .prompt([
        {
            type: 'input',
            message: 'Enter the team manager\'s name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter manager\'s ID',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter manager\'s email',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter manager\'s office number',
            name: 'officeNumber'
        }
    ])
    .then(response => {
        team['manager'] = new Manager(response.name, response.id, response.email, response.officeNumber);
        addMembers([{type: 'list', message: 'Add a team role', choices: ['Engineer', 'Intern', 'Done'], name: 'role'}]); // runs prompt loop to get the rest of the info
    })
}


init();