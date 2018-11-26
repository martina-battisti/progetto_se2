const express = require('express')
var bodyParser = require('body-parser')
const get_tasks = require('./tasks').get_tasks
const post_tasks = require('./tasks').post_tasks
const get_groups = require('./get_groups').get_groups
const post_groups = require('./get_groups').post_groups
const get_users = require('./users').users_get
const post_users = require('./users').users_post
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

var users = [{id: 1, user_name: 'PincoPallino'},{id: 22, user_name:'PancoPinco'}];

app.get('/users', (req, res) => {
	res.send(get_users(users));
})

app.post('/users', (req, res) => {
	var new_user = post_users(req.body.user_name); //body è la variabile che setto nel client.js
	
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


module.exports = {app};

app.listen(PORT, () => console.log('Listening on port ' + PORT))