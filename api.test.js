const app = require('./api').app
const fetch = require("node-fetch")
const url = "http://localhost:3000/tasks"


test('base test', () => {
	expect(true).toBe(true);
});

test('works with GET /tasks', () => {
	expect.assertions(1);
    return fetch(url)
        .then(r => expect(r.status).toEqual(200))
});