const express = require('express')
var bodyParser = require('body-parser')
const get_tasks = require('./tasks').get_tasks
const post_tasks = require('./tasks').post_tasks
const get_groups = require('./groups').get_groups
const post_groups = require('./groups').post_groups
const get_users = require('./users').users_get
const post_users = require('./users').users_post
const get_answers = require('./answers').answers_get
const post_answers = require('./answers').answers_post
const get_exams = require('./exams').get_exams
const post_exams = require('./exams').post_exams

const app = express()
const PORT = process.env.PORT || 3001
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Hello World!'))

// ------- TASKS

var choice = [{choice: 'Prima scelta', selection: false},
			  {choice: 'Seconda scelta', selection: false},
			  {choice: 'Terza scelta', selection: false}];
var radiobox = {domanda: 'Prima domanda radiobox?', options: choice, risposta: 'Prima risposta'};
var checkbox = {domanda: 'Prima domanda checkbox?', options: choice, risposta: ['Prima risposta','Seconda risposta']};
var aperta = {domanda: 'Prima domanda aperta', risposta: 'Prima risposta'}
var tasks = [{taskid: 1, tipologia: checkbox},
			 {taskid: 2, tipologia: aperta}];
var i_tasks=2;
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
	i_tasks += 1;
	var new_task = post_tasks(req.body,i_tasks); //body è la variabile che setto nel client.js
	/*
	const task_name = req.body.name
    const new_id = task_name.replace(/\s/g, '')
    const new_task =  {id:new_id, name:task_name}
    tasks.push(new_task)
	*/
	if(new_task!='errore') {
		tasks.push(new_task)
		res.status(201)
		//console.log(new_task);
		res.json(new_task)
	}
	else {
		res.status(400)
		res.end();
	}
	
	//res.end();
})

//exports.tasks = tasks;

// -------- END TASKS


// ------- USERS

var users = [{username: 'lscotch', nome: 'Laura', cognome: 'Scoccianti', email:'laurascotch@live.it', matricola: 185765},
			 {username: 'ppall', nome: 'Pinco', cognome: 'Pallino', email:'pp@mail.it', matricola: 123456}];

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
	/*var new_user = post_users(req.body);

	users.push(new_user)
	res.status(201)
	res.json(new_user)*/

	var new_user = post_users(req.body); //body è la variabile che setto nel client.js
	
	if(new_user!='errore') {
		users.push(new_user)
		res.status(201)
		res.json(new_user)
	}
	else {
		res.status(400)
		res.end();
	}

})


// -------- END USERS



// ------- GROUPS

/*
{
  "groupid": -84588233,
  "componenti": [
    {
      "username": "ipsum adipisicing",
      "matricola": 16073017,
      "nome": "Lorem la",
      "cognome": "do sit quis Excepteur",
      "email": "consequat"
    },
    {
      "username": "magna anim ullamco",
      "matricola": 65992090,
      "nome": "velit non Ut officia exercitation",
      "cognome": "magna nisi fugiat labore",
      "email": "reprehenderit consequat ex"
	}
}
*/

var groups = [{groupid: 1,
			   componenti: [users[0], users[1]]},
			  {groupid: 2,
			   componenti: [users[0]]}];
var i_groups = 2;
// console.log(groups[0].componenti[0]); //questa è la dimostrazione che c'è

app.get('/groups', (req, res) => {
	res.send(get_groups(groups));
})

app.post('/groups', (req, res) => {
	i_groups += 1;
	var new_group = post_groups(req.body,i_groups); //body è la variabile che setto nel client.js
	groups.push(new_group)
	res.status(201)
	res.json(new_group)
})

// -------- END GROUPS


// ------- ANSWERS

var answers = [{answerid: 1, taskid: 1, user: users[0], risposta: 'Prima risposta', tempo: '2018-01-30T17:12:47'},
			   {answerid: 2, taskid: 2, user: users[0], risposta: 'Seconda risposta', tempo: '2018-02-30T17:12:47'}];
i_answers = 2;

app.get('/answers', (req, res) => {
	res.send(get_answers(answers));
})

app.post('/answers', (req, res) => {
	i_answers += 1;
	var new_answer = post_answers(req.body,i_answers); //body è la variabile che setto nel client.js
	answers.push(new_answer)
	res.status(201)
	res.json(new_answer)
	
})

// -------- END ANSWERS

// ------- EXAMS

var exams = [{ examid: 1, title:'prova',  creator: users[0], tasks: [tasks[0],tasks[1]], groups: [groups[0]]},
			 { examid: 2, title:'prova', creator: users[1], tasks: [tasks[0],tasks[1]], groups: [groups[0]]}];
var i_exams = 2;

app.get('/exams', (req, res) => {
    res.send(get_exams(exams));
    })

app.post('/exams',(req,res) => {
    i_exams += 1
    var new_exam = post_exams(req.body, i_exams)
    if(new_exam!='errore') {
        exams.push(new_exam)
        res.status(201)
        res.json(new_exam)
   }
	else {
		res.status(400)
		res.end();
	}
			})
			
// -------- END EXAMS


module.exports = {app};

var server = app.listen(PORT, () => console.log('Listening on port ' + PORT))

module.exports = {app};
module.exports = server;