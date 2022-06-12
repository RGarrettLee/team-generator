const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it ('should create a new object with a: name, id, email, and school', () => {
            const danny = new Intern('Danny', 77, 'danny@email.com', 'MIT');

            expect(danny.name).toEqual('Danny');
            expect(danny.id).toEqual(77);
            expect(danny.email).toEqual('danny@email.com');
            expect(danny.school).toEqual('MIT');
        });

        it ('should throw an error if missing "school" argument', () => { // missing school
            const cb = () => new Intern('Danny', 77, 'danny@email.com');

            expect(cb).toThrow();
        });

        it ('should throw an error if "school" argument is wrong type', () => { // missing school
            const cb = () => new Intern('Danny', 77, 'danny@email.com', false);

            expect(cb).toThrow();
        });
    });

    describe("getRole", () => {
        it ('should return "Intern" as it is a special role compared to "Employee"', () => {
            const danny = new Intern('Danny', 77, 'danny@email.com', 'MIT');

            expect(danny.getRole()).toEqual('Intern');
        });
    });

    describe("getSchool", () => {
        it ('should return the school of the Intern', () => {
            const danny = new Intern('Danny', 77, 'danny@email.com', 'MIT');

            expect(danny.getSchool()).toEqual('MIT');
        });
    });
});