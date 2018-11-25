const f1 = require('./get_tasks').f1

test('task 0 corrisponde', () => {
	expect(f1('a')).toBe('a');
});