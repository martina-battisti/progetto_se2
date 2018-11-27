var https = require('http');
const fetch = require("node-fetch");

var url = "http://localhost:3001/";


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
        console.log(error);
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
	await get(url+"tasks");
	await postBody(url+"tasks",{tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}});
	await get(url+"users");
	await postBody(url+"users",{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654});
	await get(url+"groups");
	await postBody(url+"groups",{groupid: 8, componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]});
	await get(url+"answers");
	await postBody(url+"answers",{answerid: 3, taskid: 28, user: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}, risposta: 'Prova risposta', tempo: '2018-03-30T17:12:47'});
};


get_post(url)