var https = require('http');
const fetch = require("node-fetch");

var url = "http://localhost:3001/";

var task_valido1 = 	{tipologia: 
						{domanda: 'Prima domanda radiobox?', 
						 options: [{choice: 'Prima scelta', selection: false},
								   {choice: 'Seconda scelta', selection: false},
								   {choice: 'Terza scelta', selection: false}], 
						 risposta: 'Prima risposta'
						}
					};
var task_nonvalido2 =	{tipologia:
							{
							 risposta: 'Prima risposta'
							}
						};	

var user_valido1 = 	{"username": "usernamev1",
					 "nome": "firstname1",
					 "cognome": "lastname1",
					 "email": "prova1@mail.it",
					 "matricola": 132465
					};

var user_nonvalido2 = 	{
						 "nome": "firstname2",
						 "cognome": "lastname2",
						 "email": "prova2@mail.it",
						 "matricola": 132465
				   		}


/*
https.get(url, function(resp) {
	console.log('\ngetting ' + url)
	var data = "";
	resp.on("data", function(chunk) {
		data += chunk;
	});
	resp.on("end", function() {
		console.log(data);
	});
}).on("error", function(err) {
	console.log("Error: " + err.message);
});
 
*/
 //var body = 'prova'

async function postBody(url, body) { 
	//console.log('\n==='+ body +'===\n')
	console.log('\n\nposting ' + url, body + '\n')
	try {
		//	console.log('\n==='+ body +'===\n')

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			
			headers: {
				'Content-Type': 'application/json',
			},
		});
		//	console.log('\n==='+ body +'===\n')

		//console.log(response.status)
		const json = await response.json();
		//	console.log('\n==='+ body +'===\n')

		console.log(json)
		//	console.log('\n==='+ body +'===\n')

	} catch (error) {
        console.log('error');
    }
};

async function get(url) {
	console.log('\n\ngetting 2 ' + url + '\n')
    try {
		const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
};

async function get_post (url) {
	await get(url+"users");
	await postBody(url+"users",user_valido1);
	await get(url+"users")
	
	await get(url+"tasks");
	await postBody(url+"tasks",task_valido1);
	await get(url+"tasks");
	
	await get(url+"groups");
	await postBody(url+"groups",{componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]});
	await get(url+"groups");
	
	await get(url+"exams");
    await postBody(url+"exams",{
        creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456}, 
        tasks: [
            {taskid: 1, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}, 
            {taskid: 2, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}], 
        groups: [
            {groupid: 1, componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]}, 
            {groupid: 2, componenti: [{username: 'provaUser2', nome: 'Firstname2', cognome: 'Lastname2', email:'prova2@mail.it', matricola: 123650},
                                      {username: 'provaUser1', nome: 'Firstname1', cognome: 'Lastname1', email:'prova1@mail.it', matricola: 123655}]} ] })
	await get(url+"exams");
	
	await get(url+"answers");
	await postBody(url+"answers",{taskid: 2, user: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}, risposta: 'Prova risposta', tempo: '2018-03-30T17:12:47'});
	await get(url+"answers");
};


get_post(url)