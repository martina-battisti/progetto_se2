const f1 = require('./get_tasks').f1
const f2 = require('./get_tasks').f2

test('Restituisce quello che passo correttamente', () => {
	expect(f1('a')).toBe('a');
});


test('Crea nuova task con parametro passato', () => 
		expect(f2('prova')).toEqual({ id: 'prova', name: 'prova' });
	}
});

