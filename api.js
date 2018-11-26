const express = require('express')
var bodyParser = require('body-parser')
const get_tasks = require('./get_tasks').f1
const post_tasks = require('./get_tasks').f2
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

//exports.tasks = tasks;
module.exports = {app};

// -------- END TASKS





app.listen(PORT, () => console.log('Listening on port ' + PORT))