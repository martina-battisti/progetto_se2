const get = require('./users').users_get
const post = require('./users').users_post
const get_id_users = require('./users').users_id
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

test('Get user con id inesistente', () => {
	expect(get_id_users(999999)).toEqual('errore');
});