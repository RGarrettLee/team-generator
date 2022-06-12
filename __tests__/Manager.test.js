const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it ('should create a new object with a: name, id, email, and office number', () => {
            const michael = new Manager('Michael', 4, 'michael@email.com', 1);

            expect(michael.name).toEqual('Michael');
            expect(michael.id).toEqual(4);
            expect(michael.email).toEqual('michael@email.com');
            expect(michael.officeNumber).toEqual(1);
        });

        it ('should throw an error if missing "officeNumber" argument', () => { // missing officeNumber
            const cb = () => new Manager('Michael', 1, 'michael@email.com');

            expect(cb).toThrow();
        });

        it ('should throw an error if "officeNumber" argument is wrong type', () => {
            const cb = () => new Manager('Michael', 1, 'michael@email.com', '1');

            expect(cb).toThrow();
        });
    });

    describe("getRole", () => {
        it ('should return "Manager" as it is a special role compared to "Employee"', () => {
            const michael = new Manager('Michael', 4, 'michael@email.com', 1);

            expect(michael.getRole()).toEqual('Manager');
        })
    })
});