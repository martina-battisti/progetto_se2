const app = require('./api').app
const fetch = require("node-fetch")
const url = "http://localhost:3000/"


test('base test', () => {
	expect(true).toBe(true);
});

test('works with GET /tasks', () => {
	expect.assertions(1);
    return fetch(url+"tasks")
        .then(r => expect(r.status).toEqual(200))
});

test('works with GET /users', () => {
	expect.assertions(1);
    return fetch(url+"users")
        .then(r => expect(r.status).toEqual(200))
});

//afterAll(() => setTimeout(() => process.exit(), 1000));