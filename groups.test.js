const get_groups = require('./groups').get_groups
const post_groups = require('./groups').post_groups

test('get group corrisponde', () => {
	expect(get_groups('a')).toBe('a');
});

test('post group corrisponde', () => {  //DA MODIFICARE
	expect(post_groups({componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]},3)).toEqual({groupid: 3, componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]});
});