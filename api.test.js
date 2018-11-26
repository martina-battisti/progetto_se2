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

/*
test('works with POST /tasks', () => {
	expect.assertions(1);
    return fetch(url)
        .then(r => expect(r.status).toEqual(200))
});
*/

test('works with POST /tasks', () => {
	expect.assertions(1);
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify({name: 'new task'}),
		headers: {
			'Content-Type': 'application/json',
		},
    })
	//.then(r => r.json())
    .then(r => expect(r.status).toEqual(201));
});
