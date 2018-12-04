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

var exam_valido1 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}
         

var exam_nonvalido1 = {
                    creator: null,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}

var group_valido1 = {
	titolo: "prova1",
	componenti: [
		80709944,
		74734533,
		89689823,
		6293821,
		70651806
	  ]
}

var answer_valido1 = {taskid: 1, 
	userid:1 ,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

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
	console.log('\n\ngetting ' + url + '\n')
    try {
		const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
};

async function get_id(url) {
	console.log('\n\ngetting by id ' + url + '\n')
    try {
		const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log('error');
    }
};

async function get_post (url) {
	
	await get(url+"users");
	await postBody(url+"users",user_valido1);
	await get(url+"users")
	await get_id(url+'users/1');
	
	await get(url+"tasks");
	await postBody(url+"tasks",task_valido1);
	await get(url+"tasks");
	await get_id(url+'tasks/1');
	
	await get(url+"groups");
	await postBody(url+"groups",group_valido1);
	await get(url+"groups");
	
	await get(url+"exams");
    await postBody(url+"exams",exam_valido1);
	await get(url+"exams");
	
	await get(url+"answers");
	await postBody(url+"answers",answer_valido1);
	await get(url+"answers");
	
};


get_post(url)