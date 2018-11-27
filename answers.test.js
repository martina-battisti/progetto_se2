const get_answers = require('./answers').answers_get
const post_answers = require('./answers').answers_post

test('Get answer coincide', () => {
	expect(get_answers('a')).toBe('a');
});

test('Crea nuova answer con parametro passato', () => {
		expect(post_answers('prova')).toEqual({ id: 'prova', answer_name: 'prova' });
});
