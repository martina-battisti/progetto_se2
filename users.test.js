const get = require('./users').users_get
const post = require('./users').users_post

test('get user corrisponde', () => {
	expect(get('a')).toBe('a');
});

test('user postato corrisponde', () => {
	expect(post('prova')).toEqual({ id: 'prova', user_name: 'prova' });
});