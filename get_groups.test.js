const get_groups = require('./get_groups').get_groups
const post_groups = require('./get_groups').post_groups

test('get group corrisponde', () => {
	expect(get_groups('a')).toBe('a');
});
/*
test('post group corrisponde', () => {  //DA MODIFICARE
	expect(post_groups('prova')).toEqual({ id: 'prova', name: 'prova' });
});
*/