const express = require('express')
var bodyParser = require('body-parser')
const get_tasks = require('./tasks').get_tasks
const post_tasks = require('./tasks').post_tasks
const get_groups = require('./get_groups').get_groups
const post_groups = require('./get_groups').post_groups
const get_users = require('./users').users_get
const post_users = require('./users').users_post
const get_answers = require('./answers').answers_get
const post_answers = require('./answers').answers_post
const app = express()
const PORT = process.env.PORT || 3001
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => res.send('Hello World!'))

// ------- TASKS

var tasks = [{id: 21, task_name: 'Crocette'},{id: 28, task_name:'V/F'}];

/*
app.get('/tasks', (req, res) => {
	res.json(get_tasks(tasks))
})

module.exports = {app};
*/

app.get('/tasks', (req, res) => {
	res.send(get_tasks(tasks));
})

app.post('/tasks', (req, res) => {
	var new_task = post_tasks(req.body.task_name); //body è la variabile che setto nel client.js
	/*
	const task_name = req.body.name
    const new_id = task_name.replace(/\s/g, '')
    const new_task =  {id:new_id, name:task_name}
    tasks.push(new_task)
	*/
	tasks.push(new_task)
    res.status(201)
	//console.log(tasks);
	res.json(tasks)
	
	//res.end();
})


// -------- END TASKS

// ------- USERS

var users = [{username: 'lscotch', nome: 'Laura', cognome: 'Scoccianti', email:'laurascotch@live.it', matricola: 185765}, {username: 'ppall', nome: 'Pinco', cognome: 'Pallino', email:'pp@mail.it', matricola: 123456}];

/*
	USER	
{
	"username": "ipsum aliqua exercitation nulla",
	"nome": "elit d",
	"cognome": "nostrud ullamco ea labore Excepteur",
	"email": "dolor exercitation incididunt reprehen",
	"matricola": -51728310
}*/

app.get('/users', (req, res) => {
	res.send(get_users(users));
})

app.post('/users', (req, res) => {
	//var new_user = post_users(req.body.user_name); //body è la variabile che setto nel client.js
	var new_user = post_users(req.body);

	users.push(new_user)
	res.status(201)
	res.json(users)
	
})


// -------- END USERS



// ------- GROUPS

var groups = [{groupid : 10, 	componenti: [{username: 'mr', matricola: 136, nome: 'Martina', cognome: 'Rossi', email: 'email1@gmail.com' },
											{username: 'cr', matricola: 157, nome: 'Cristiano', cognome: 'Rossi', email: 'email2@gmail.com' }]},
			{groupid : 15, 	componenti: [{username: 'mr', matricola: 136, nome: 'Martina', cognome: 'Rossi', email: 'email1@gmail.com' },
										{username: 'cr', matricola: 157, nome: 'Cristiano', cognome: 'Rossi', email: 'email2@gmail.com' }]}];

app.get('/groups', (req, res) => {
	res.send(get_groups(groups));
})

app.post('/groups', (req, res) => {
	var new_group = post_groups(req.body.name); //body è la variabile che setto nel client.js
	groups.push(new_group)
	res.status(201)
	res.json(groups)
})

// -------- END GROUPS


// ------- ANSWERS

var answers = [{id: 1, answare_name: 'risposta 1'},{id: 22, answare_name:'risposta 2'}];

app.get('/answers', (req, res) => {
	res.send(get_answers(answers));
})

app.post('/answers', (req, res) => {
	var new_answare = post_answers(req.body.answer_name); //body è la variabile che setto nel client.js
	
	answers.push(new_answare)
	res.status(201)
	res.json(answers)
	
})


// -------- END ANSWERS


module.exports = {app};

app.listen(PORT, () => console.log('Listening on port ' + PORT))