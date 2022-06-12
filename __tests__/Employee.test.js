const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Initiailization", () => { // run tests around initializing a new "Employee" object
        it ('should create a new object with a: name, id, and email', () => {
            const jerry = new Employee('Jerry', 1, 'jerry@email.com');

            expect(jerry.name).toEqual('Jerry');
            expect(jerry.id).toEqual(1);
            expect(jerry.email).toEqual('jerry@email.com');
        });

        it ('should throw an error if missing arguments', () => { // missing school
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it ('should throw an error if missing "email" argument', () => { // missing email
            const cb = () => new Employee('Jerry', 1);

            expect(cb).toThrow();
        });

        it ('should throw an error if missing "id" argument', () => { // missing id
            const cb = () => new Employee('Jerry', 'jerry@email.com');

            expect(cb).toThrow();
        });

        it ('should throw an error if missing "name" arguments', () => { // missing name
            const cb = () => new Employee(1, 'jerry@email.com');

            expect(cb).toThrow();
        });

        it ('should throw an error if "email" is an incorrect type', () => { // email wrong type
            const cb = () => new Employee('Jerry', 1, true);

            expect(cb).toThrow();
        });
        
        it ('should throw an error if "id" is an incorrect type', () => { // id wrong type
            const cb = () => new Employee('Jerry', '1', 'jerry@email.com');

            expect(cb).toThrow();
        });

        it ('should throw an error if "name" is an incorrect type', () => { // name wrong type
            const cb = () => new Employee(55, 1, 'jerry@email.com');

            expect(cb).toThrow();
        });

        it ('should throw an error if "id" is a negative number', () => {
            const cb = () => new Employee('Jerry', -5, 'jerry@email.com');

            expect(cb).toThrow();
        });
    });

    describe("getName", () => {
        it ('should return the "name" variable of the object', () => {
            const jerry = new Employee('Jerry', 1, 'jerry@email.com');

            expect(jerry.getName()).toEqual('Jerry');
        });
    });

    describe("getId", () => {
        it ('should return the "id" variable of the object', () => {
            const jerry = new Employee('Jerry', 1, 'jerry@email.com');

            expect(jerry.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it ('should return the "email" variable of the object', () => {
            const jerry = new Employee('Jerry', 1, 'jerry@email.com');

            expect(jerry.getEmail()).toEqual('jerry@email.com');
        });
    });

    describe("getRole", () => {
        it ('should return "Employee" as it is not a special role', () => {
            const jerry = new Employee('Jerry', 1, 'jerry@email.com');

            expect(jerry.getRole()).toEqual('Employee');
        });
    });
});