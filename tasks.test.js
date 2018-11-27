const get_tasks = require('./tasks').get_tasks
const post_tasks = require('./tasks').post_tasks

test('Restituisce quello che passo correttamente', () => {
	expect(get_tasks('a')).toBe('a');
});

test('Crea nuova task con parametro passato', () => {
		expect(post_tasks({tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}})).toEqual({taskid: 'Primadomandaradiobox?', tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}});
});
