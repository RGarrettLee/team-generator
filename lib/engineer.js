const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;

        if (typeof github !== 'string' || !github.trim().length) {
            throw new Error('Expected Parameter \'github\' to be a non-empty string');
        }
    }

    getRole() {
        return `Engineer`;
    }

    getGithub() {
        return `https://github.com/${this.github}/`;
    }
}

module.exports = Engineer;