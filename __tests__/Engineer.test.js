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
    });
});