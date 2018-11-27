const get = require('./users').users_get
const post = require('./users').users_post

test('get user corrisponde', () => {
	expect(get({username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111})).toEqual({username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111});
});

test('user postato corrisponde', () => {
	expect(post({username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111})).toEqual({username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111});
});