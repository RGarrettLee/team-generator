const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        if (typeof school !== 'string' || !school.trim().length) {
            throw new Error('Expected Parameter \'school\' to be a non-empty string');
        }
    }

    getRole() {
        return `Intern`;
    }

    getSchool() {
        return `${this.school}`;
    }
}

module.exports = Intern;