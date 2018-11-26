const express = require('express')
var bodyParser = require('body-parser')
const get_tasks = require('./get_tasks').f1
const post_tasks = require('./get_tasks').f2
const get_groups = require('./get_groups').f1groups
const post_groups = require('./get_groups').f2groups
const app = express()
const PORT = process.env.PORT || 3000
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));





// ------- TASKS

var tasks = [{id: 21, name: 'Crocette'},{id: 28, name:'V/F'}];

app.get('/', (req, res) => res.send('Hello World!'))

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
	var new_task = post_tasks(req.body.name); //body è la variabile che setto nel client.js
	/*
	const task_name = req.body.name
    const new_id = task_name.replace(/\s/g, '')
    const new_task =  {id:new_id, name:task_name}
    tasks.push(new_task)
	*/
	tasks.push(new_task)
//    res.status(201)
	//console.log(tasks);
	res.json(tasks)
	
	//res.end();
})


// -------- END TASKS


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
	res.json(groups)
})

// -------- END GROUPS


//exports.tasks = tasks;
//exports.groups = groups;
module.exports = {app};

app.listen(PORT, () => console.log('Listening on port ' + PORT))