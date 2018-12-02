const get = require('./users').users_get
const post = require('./users').users_post

var user_valido1 = 	{"username": "usernamev1",
					 "nome": "firstname1",
					 "cognome": "lastname1",
					 "email": "prova1@mail.it",
					 "matricola": 132465
					};

//manca username
var user_nonvalido1 = 	{
						 "nome": "firstname2",
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


//TEST

//validi

test('get user corrisponde', () => {
	expect(get({username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111})).toEqual({username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111});
});

test('user postato corrisponde', () => {
	expect(post({username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111})).toEqual({username: 'provaT', nome: 'TestName', cognome: 'TestSurname', email:'mail@test.com', matricola: 111111});
});

//non validi

test('username mancante', () => {
	expect(post(user_nonvalido1)).toEqual('errore');
});

test('matricola mancante', () => {
	expect(post(user_nonvalido2)).toEqual('errore');
});

test('email mancante', () => {
	expect(post(user_nonvalido3)).toEqual('errore');
});

test('email non valida 1', () => {
	expect(post(user_nonvalido4)).toEqual('errore');
});

test('email non valida 2', () => {
	expect(post(user_nonvalido5)).toEqual('errore');
});

test('email non valida 3', () => {
	expect(post(user_nonvalido6)).toEqual('errore');
});