const get_tasks = require('./tasks').get_tasks
const post_tasks = require('./tasks').post_tasks

test('Restituisce quello che passo correttamente', () => {
	expect(get_tasks('a')).toBe('a');
});

test('Crea nuova task con parametro passato', () => {
		expect(post_tasks('prova')).toEqual({ id: 'prova', task_name: 'prova' });
});
