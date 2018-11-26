const f1groups = require('./get_groups').f1groups
const f2groups = require('./get_groups').f2groups

test('get group corrisponde', () => {
	expect(f1groups('a')).toBe('a');
});

test('post group corrisponde', () => {
	expect(f2group('prova')).toEqual({ id: 'prova', name: 'prova' });
});