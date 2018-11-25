const fn = require('./get_tasks').fn

test('task 0 corrisponde', () => {
	expect(fn('a')).toBe('a');
});