const express = require('express')
var bodyParser = require('body-parser')
const get_tasks = require('./tasks').get_tasks
const get_id_tasks = require('./tasks').get_id
const post_tasks = require('./tasks').post_tasks
const get_groups = require('./groups').get_groups
const get_id_groups = require('./groups').get_id
const post_groups = require('./groups').post_groups
const get_users = require('./users').users_get
const get_id_users = require('./users').get_id
const post_users = require('./users').users_post
//const put_users = require('./users').users_put
const get_answers = require('./answers').answers_get
const get_id_answers = require('./answers').get_id
const post_answers = require('./answers').answers_post
const get_exams = require('./exams').get_exams
const post_exams = require('./exams').post_exams
var risorse = require('./risorse')
//const get_exams_by_id = require('./exams').get_exams_by_id

const app = express()
const PORT = process.env.PORT || 8000
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Hello World!'))

// ------- TASKS


var i_tasks=2;
/*
app.get('/tasks', (req, res) => {
	res.json(get_tasks(tasks))
})

module.exports = {app};
*/

app.get('/tasks', (req, res) => {
	res.send(get_tasks(risorse.tasks));
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
		risorse.tasks.push(new_task)
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

app.get('/tasks/:taskid', (req,res) => {
	const id = Number.parseInt(req.params.taskid);
	if(!id){
        res.status(400)
		res.send('errore')
		res.end();
    }
	var task = get_id_tasks(id);
    if(task!='errore'){
        //var tjson = JSON.parse(JSON.stringify(task));
		res.json(task)
        res.status(200)
		//res.send(tjson);
    }else{
		res.status(404);
		res.send('errore');
		res.end();
    }
});

//exports.tasks = tasks;

// -------- END TASKS


// ------- USERS

var user_id = 2;
/*
	USER	
{
	"userID" : 21
	"username": "ipsum aliqua exercitation nulla",
	"nome": "elit d",
	"cognome": "nostrud ullamco ea labore Excepteur",
	"email": "dolor exercitation incididunt reprehen",
	"matricola": -51728310
}*/

app.get('/users', (req, res) => {
	res.send(get_users(risorse.users));
})

app.post('/users', (req, res) => {
	user_id += 1;
	var new_user = post_users(user_id,req.body); //body è la variabile che setto nel client.js
	
	if(new_user!='errore') {
		risorse.users.push(new_user)
		res.status(201)
		res.json(new_user)
	}
	else {
		res.status(400)
		res.end();
	}

})
/*
app.put('users/:userID', async (req, res) => {
	const userID = Number.parseInt(req.params.userID);
	var oldIndex = getByUserId(userID);
	const toModify = req.body;
	
	if(!userID || userID == null || userID<=0){
		res.status(404).end();
	}else if(oldIndex == null){
		res.status(404).end();
	}else{
		let modified = await put_users(toModify, users[oldIndex]);
		if(modified != 'errore'){
			users[oldIndex] = modified
			res.status(204)
			res.json(users[oldIndex])
		}else{
			res.status(404).end();
		}
	}
});

app.delete('users/:userID', async (req, res) => {
	const userID = Number.parseInt(req.params.userID);
	var userIndex = getByUserId(userID);
	if(!userID || userID == null || userID<=0){
		res.status(400).end();
	}else if(userIndex == null){
		res.status(400).end();
	}else{
    	users.splice(userIndex,1)
    	console.log('\ndeleting ',req.params.id)
    	console.log('now:',users)
    	res.sendStatus(204) // delete, no content
	}
})
*/
app.get('/users/:userid', (req,res) => {
	const id = Number.parseInt(req.params.userid);
	if(!id){
        res.status(400)
		res.send('errore')
		res.end();
    }
	var user = get_id_users(id);
    if(user!='errore'){
        //var tjson = JSON.parse(JSON.stringify(user));
		res.json(user)
        res.status(200)
		//res.send(tjson);
    }else{
		res.status(404);
		res.send('errore');
		res.end();
    }
});

// -------- END USERS



// ------- GROUPS

var i_groups = 2;
// console.log(groups[0].componenti[0]); //questa è la dimostrazione che c'è

app.get('/groups', (req, res) => {
	res.send(get_groups(risorse.groups));
})

app.post('/groups', (req, res) => {
	i_groups += 1;
	var new_group = post_groups(req.body,i_groups); //body è la variabile che setto nel client.js
    if(new_group!='errore') {
        risorse.groups.push(new_group)
	    res.status(201)
        res.json(new_group)
    } else {
        res.status(400)
		res.end();
    }
})

app.get('/groups/:groupid', (req,res) => {
	const id = Number.parseInt(req.params.groupid);
	if(!id){
        res.status(400)
		res.send('errore')
		res.end();
    }
	var group = get_id_groups(id);
    if(group!='errore'){
        //var tjson = JSON.parse(JSON.stringify(task));
		res.json(group)
        res.status(200)
		//res.send(tjson);
    }else{
		res.status(404);
		res.send('errore');
		res.end();
    }
});

// -------- END GROUPS


// ------- ANSWERS

i_answers = 2;

app.get('/answers', (req, res) => {
	res.send(get_answers(risorse.answers));
})

app.post('/answers', (req, res) => {
	i_answers += 1;
	var new_answer = post_answers(req.body,i_answers); //body è la variabile che setto nel client.js
	if(new_answer!='errore'){
		risorse.answers.push(new_answer)
		res.status(201)
		res.json(new_answer)
	}
	else {
		res.status(400)
		res.end();
	}	
})

app.get('/answers/:answerid', (req,res) => {
	const id = Number.parseInt(req.params.answerid);
	if(!id){
        res.status(400)
		res.send('errore')
		res.end();
    }
	var answer = get_id_answers(id);
    if(answer!='errore'){
        //var tjson = JSON.parse(JSON.stringify(task));
		res.json(answer)
        res.status(200)
		//res.send(tjson);
    }else{
		res.status(404);
		res.send('errore');
		res.end();
    }
});

// -------- END ANSWERS

// ------- EXAMS

var exams = [{ examid: 1, titolo:'prova', creator: 0, tasks: [0,1], groups: [4,5,6]},
			 { examid: 2, titolo:'prova', creator: 1, tasks: [0,1], groups: [4,6,8]}];

//exports.exams = exams;
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
/*			
app.get('/exams/:examid', async (req,res) => {
    
    var exambyid = get_exams_by_id(req.params.examid)
    console.log(exambyid)
    res.send(exambyid);
   
})
*/ 
// -------- END EXAMS





//---------------------------FUNZIONI NECESSARIE---------------------------------
/*
async function getByUserId(id){
	if(!id){
		return null;
	}else{
		var resultIndex = users.findIndex(x => x.userID === id);
		if(resultIndex != false){
			return resultIndex;
		}else{
			console.log("userID non trovato")
			return null;
		}
	}
}
*/
//-------------------------------------------------------------------------------


var server = app.listen(PORT, () => console.log('Listening on port ' + PORT))

module.exports = {app};
//exports.tasks = tasks;
module.exports = server;