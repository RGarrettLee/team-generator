const inquirer = require('inquirer'); // import libraries needed
const fs = require('fs');
const html = require('./src/generateHTML.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let team = {}; // create new object to hold the inputted team
let count = [0, 0]; // keep track of amount of engineers/interns on a team

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
                case 'Done':
                    console.log(team);
                    return;
                case 'Engineer':
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
                            team[`eng${count[0]}`] = new Engineer(response.name, response.id, response.email, response.github);
                            count[0]++;
                            return addMembers(question);
                        });
                    break;
                case 'Intern':
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
                            team[`intern${count[1]}`] = new Intern(response.name, response.id, response.email, response.school);
                            count[1]++;
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
            eng1: new Engineer('Brad', 2, 'brad@company.com', 'ItzBrad'),
            eng2: new Engineer('Chad', 3, 'chad@company.com', 'chadscode'),
            eng3: new Engineer('Tad', 4, 'tad@company.com', 'typertad'),
            intern: new Intern('Jerry', 5, 'jerry@company.com', 'MIT')
        }

        writeToFile('example', html(example));
        return;
    }

    inquirer
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
        addMembers([{type: 'list', message: 'Add a team role', choices: ['Engineer', 'Intern', 'Done'], name: 'role'}]);
    })
}


init();