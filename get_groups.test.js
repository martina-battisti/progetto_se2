const f1groups = require('./get_groups').f1groups

test('group 0 corrisponde', () => {
	expect(f1groups('a')).toBe('a');
});