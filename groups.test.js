const get_groups = require('./groups').get_groups
const post_groups = require('./groups').post_groups
const get_id_groups = require('./groups').get_id
var risorse = require('./risorse')

//INPUT VALIDI
var group_valido1 = {
	titolo: "prova1",
	componenti: [
		80709944,
		-74734533,
		-89689823,
		-6293821,
		-70651806
	  ]
}

//INPUT NON VALIDI
var group_nonvalido1 = {
	titolo: "nprova1",
	componenti: [
	  ]
}

var group_nonvalido2 = {
	componenti: [
		80709944,
		-74734533,
		-89689823,
		-6293821,
		-70651806
	  ]
}

var group_nonvalido3 = null;	

var group_nonvalido4 = {
	titolo: null,
	componenti: [
		80709944,
		-74734533,
		-89689823,
		-6293821,
		-70651806
	  ]
}

var group_nonvalido5 = {
	titolo: "nprova4",
	componenti: null
}

//TEST VALIDI

test('get group corrisponde', () => {
	expect(get_groups('a')).toBe('a');
});

test('Crea nuovo group con parametri passati', () => {
	//var i = tasks.i
	expect(post_groups(group_valido1,1)).toEqual({groupid:1, titolo:group_valido1.titolo, componenti:group_valido1.componenti});
});

test('Get group con id correttamente', () => {
	expect(get_id_groups(1)).toEqual(risorse.groups[0]);
});

//TEST NON VALIDI

test('Get group con id inesistente', () => {
	expect(get_id_groups(999999)).toEqual('errore');
});

test('group con nessun componente', () => {
	expect(post_groups(group_nonvalido1,1)).toEqual('errore');
});

test('group senza titolo', () => {
	expect(post_groups(group_nonvalido2,1)).toEqual('errore');
});

test('gruppo inesistente', () => {
	expect(post_groups(group_nonvalido3,1)).toEqual('errore');
});

test('group titolo non inserito', () => {
	expect(post_groups(group_nonvalido4,1)).toEqual('errore');
});

test('group con array componenti inesistente', () => {
	expect(post_groups(group_nonvalido5,1)).toEqual('errore');
});

test('group con i passato NaN', () => {
	expect(post_groups(group_valido1,'a')).toEqual('errore');
});

test('groupID mancante', () => {
	expect(post_groups(group_valido1)).toEqual('errore');
});


