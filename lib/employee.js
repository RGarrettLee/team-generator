class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email= email;

        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error('Expected Parameter \'name\' to be a non-empty string');
        }
        if (typeof id !== 'number' || isNaN(id) || id <= 0) {
            throw new Error('Expected Parameter \'id\' to be a non-negative number');
        }
        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error('Expected Parameter \'email\' to be a non-empty string');
        }
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;