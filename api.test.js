const app = require('./api').app
const fetch = require("node-fetch")
const url = "http://localhost:3001/"


test('base test', () => {
	expect(true).toBe(true);
});


test('works with GET /tasks', () => {
	expect.assertions(1);
    return fetch(url+"tasks")
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
	return fetch(url+"tasks", {
		method: 'POST',
		body: JSON.stringify({tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}),
		headers: {
			'Content-Type': 'application/json',
		},
    })
	//.then(r => r.json())
    .then(r => expect(r.status).toEqual(201));
});

test('works with GET /users', () => {
	expect.assertions(1);
    return fetch(url+"users")
        .then(r => expect(r.status).toEqual(200))
});

test('works with POST /users', () => {
	expect.assertions(1);
	return fetch(url+"users", {
		method: 'POST',
		body: JSON.stringify({user_name: 'new user'}),
		headers: {
			'Content-Type': 'application/json',
		},
    })
	//.then(r => r.json())
    .then(r => expect(r.status).toEqual(201));
});

//afterAll(() => setTimeout(() => process.exit(), 1000));


test('works with GET /groups', () => {
	expect.assertions(1);
    return fetch(url+"groups")
        .then(r => expect(r.status).toEqual(200))
});
/*
test('works with POST /groups', () => {
	expect.assertions(1);
	return fetch(url+"groups", {
		method: 'POST',
		body: JSON.stringify({group_name: 'new group'}),
		headers: {
			'Content-Type': 'application/json',
		},
    })
	//.then(r => r.json())
    .then(r => expect(r.status).toEqual(201));
});
*/

test('works with GET /answers', () => {
	expect.assertions(1);
    return fetch(url+"answers")
        .then(r => expect(r.status).toEqual(200))
});

test('works with POST /answers', () => {
	expect.assertions(1);
	return fetch(url+"answers", {
		method: 'POST',
		body: JSON.stringify({answer_name: 'new answer'}),
		headers: {
			'Content-Type': 'application/json',
		},
    })
	//.then(r => r.json())
    .then(r => expect(r.status).toEqual(201));
});