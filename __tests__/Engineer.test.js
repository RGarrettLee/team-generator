const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it ('should create a new object with a: name, id, email, and github username', () => {
            const garrett = new Engineer('Garrett', 4253, 'garrett@email.com', 'RGarrettLee');

            expect(garrett.name).toEqual('Garrett');
            expect(garrett.id).toEqual(4253);
            expect(garrett.email).toEqual('garrett@email.com');
            expect(garrett.github).toEqual('RGarrettLee');
        });

        it ('should throw an error if missing "github" argument', () => { // missing github username
            const cb = () => new Engineer('Garrett', 4253, 'garrett@email.com');

            expect(cb).toThrow();
        });

        it ('should throw an error if "github" argument is wrong type', () => { // missing github username
            const cb = () => new Engineer('Garrett', 4253, 'garrett@email.com', 5555);

            expect(cb).toThrow();
        });
    });

    describe("getRole", () => {
        it ('should return "Engineer" as it is a special role compared to "Employee"', () => {
            const garrett = new Engineer('Garrett', 4253, 'garrett@email.com', 'RGarrettLee');

            expect(garrett.getRole()).toEqual('Engineer');
        });
    });

    describe("getGithub", () => {
        it ('should return a link to the Engineer\'s github', () => {
            const garrett = new Engineer('Garrett', 4253, 'garrett@email.com', 'RGarrettLee');

            expect(garrett.getGithub()).toEqual(`https://github.com/${garrett.github}/`);
        });
    });
});