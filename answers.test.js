const get_answers = require('./answers').answers_get
const post_answers = require('./answers').answers_post

test('Get answer coincide', () => {
	expect(get_answers('a')).toBe('a');
});

test('Crea nuova answer con parametro passato', () => {
		expect(post_answers({answerid: 2, taskid: 28, user: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}, risposta: 'Seconda risposta', tempo: '2018-02-30T17:12:47'})).toEqual({answerid: 2, taskid: 28, user: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}, risposta: 'Seconda risposta', tempo: '2018-02-30T17:12:47'});
});
