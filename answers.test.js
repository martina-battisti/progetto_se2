const get_tasks = require('./aswers').get_answers
const post_tasks = require('./answers').post_answers

test('Get answer coincide', () => {
	expect(get_answers('a')).toBe('a');
});

test('Crea nuova answer con parametro passato', () => {
		expect(post_answers('prova')).toEqual({ id: 'prova', answer_name: 'prova' });
});
