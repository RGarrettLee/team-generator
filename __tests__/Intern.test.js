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
    });
});