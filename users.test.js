const get = require('./users').users_get
const post = require('./users').users_post
//const put = require('./users').users_put
const get_id_users = require('./users').get_id
var risorse = require('./risorse')

var user_valido1 = 	{"username": "usernamev1",
					 "nome": "firstname1",
					 "cognome": "lastname1",
					 "email": "prova1@mail.it",
					 "matricola": 132465
					};

//user non inserito
user_nonvalido00 = null

//manca userID
var user_nonvalido0 = 	{"username": "provaname",
						 "nome": "firstname2",
						 "cognome": "lastname2",
						 "email": "prova2@mail.it",
						 "matricola": 132465
				   		}

//manca username
var user_nonvalido1 = 	{"nome": "firstname2",
						 "cognome": "lastname2",
						 "email": "prova2@mail.it",
						 "matricola": 132465
				   		}

//manca matricola
var user_nonvalido2 = 	{	"username": "usernamev1",
						   	"nome": "firstname1",
						   	"cognome": "lastname1",
						   	"email": "prova1@mail.it"
						};
	  
//manca email
var user_nonvalido3 = 	{	"username": "usernamev1",
						   	"nome": "firstname1",
						   	"cognome": "lastname1",
						   	"matricola": 132465
						};

//email non valida
var user_nonvalido4 = 	{	"username": "usernamev1",
						   	"nome": "firstname1",
						   	"cognome": "lastname1",
						   	"email": "prova1.mail.it",
						   	"matricola": 132465
						};

//email non valida 2
var user_nonvalido5 = 	{	"username": "usernamev1",
						   	"nome": "firstname1",
						   	"cognome": "lastname1",
						   	"email": "prova1@.mail.it",
						   	"matricola": 132465
						};

//email non valida 3
var user_nonvalido6 = 	{	"username": "usernamev1",
						   	"nome": "firstname1",
						   	"cognome": "lastname1",
						   	"email": "prova1@mail",
						   	"matricola": 132465
						};

//matricola non della giusta lunghezza
var user_nonvalido7 = 	{	"username": "usernamev1",
						   	"nome": "firstname1",
						   	"cognome": "lastname1",
						   	"email": "prova1@mail",
						   	"matricola": 13246
						};

//CASI PER PUT
var damod = 	{"userID":7,
				 "username":"oun1",
				 "nome":"on1",
				 "cognome":"oc1",
				 "email":"oe@mt.it",
				 "matricola":123556
				} 

//modifica valida
var mod_valido1 = 	{"userID":7,
					 "username":"un1",
					 "nome":"n1",
					 "cognome":"c1",
					 "email":"em@ma.it",
					 "matricola":123456
					}

//modifica non valida 1 - email non valida
var mod_nonvalido1 = 	{"userID":7,
					 "cognome":"c1",
					 "email":"em.i",
					 "matricola":123456
					}

//modifica non valida - matricola non valida
var mod_nonvalido2 = 	{"userID":7,
					 "username":"un1",
					 "email":"e@m.i",
					 "matricola":12456
					}

//modifica non valida - non modifica nulla
var mod_nonvalido3 = 	{"userID": '',
					 "username": "",
					 "nome":"",
					 "cognome":"",
					 "email":"",
					 "matricola":''
					}

//modifica non valida
var mod_nonvalido4 = null

//TEST

//validi

test('get user corrisponde', () => {
	expect(get({userID: 8, username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111})).toEqual({userID: 8, username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111});
});

test('user postato correttamente con parametro', () => {
	expect(post(8, user_valido1)).toEqual({userID: 8, username: user_valido1.username, nome: user_valido1.nome, cognome: user_valido1.cognome, email: user_valido1.email, matricola: user_valido1.matricola});
});

test('Get user con id correttamente', () => {
	expect(get_id_users(1)).toEqual(risorse.users[0]);
});

//non validi

test('Get user con id inesistente', () => {
	expect(get_id_users(999999)).toEqual('errore');
});

test('userID mancante', () => {
	expect(post(user_valido1)).toEqual('errore');
});

test('userID non è un numero', () => {
	expect(post('a', user_valido1)).toEqual('errore');
});

test('user non inserito', () => {
	expect(post(2, user_nonvalido00)).toEqual('errore');
});

test('username mancante', () => {
	expect(post(2, user_nonvalido1)).toEqual('errore');
});

test('matricola mancante', () => {
	expect(post(2, user_nonvalido2)).toEqual('errore');
});

test('email mancante', () => {
	expect(post(2, user_nonvalido3)).toEqual('errore');
});

test('email non valida 1', () => {
	expect(post(2, user_nonvalido4)).toEqual('errore');
});

test('email non valida 2', () => {
	expect(post(2, user_nonvalido5)).toEqual('errore');
});

test('email non valida 3', () => {
	expect(post(2, user_nonvalido6)).toEqual('errore');
});

test('matricola non della giusta lunghezza', () => {
	expect(post(2, user_nonvalido7)).toEqual('errore');
});
/*
test('modifica valida per put', () => {
	expect(put(mod_valido1,damod)).toEqual({userID: mod_valido1.userID, username: mod_valido1.username, nome: mod_valido1.nome, cognome: mod_valido1.cognome, email: mod_valido1.email, matricola: mod_valido1.matricola});
});

test('modifica non valida - email non valida', () => {
	expect(put(mod_nonvalido1, damod)).toEqual('errore');
});

test('modifica non valida - matricola non valida', () => {
	expect(put(mod_nonvalido2, damod)).toEqual('errore');
});

test('modifica non valida - non modifica nulla', () => {
	expect(put(mod_nonvalido3, damod)).toEqual('errore');
});

test('modifica non valida - passo un null', () => {
	expect(put(mod_nonvalido4, damod)).toEqual('errore');
});
*/


