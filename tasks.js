//var api = require('./api')
var bodyParser = require('body-parser')
const express = require('express')
const app = express()
//var api = require('./api')
var risorse = require('./risorse')
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

	//funzione della get: non fa altro se non ritornare l'elemento desiderato
var get_tasks = (x) => {
	/*
		var r = ''
		r = r + 'id: ' + x[0].id
		r = r + '     name: ' + x[0].name 
		return(r)
		//return(x[0].id)
	*/
	/*
	var obj = JSON.parse(x)
	
	return(obj[0].x.id)
	*/
	//console.log(risorse.tasks);
	//console.log(api.tasks);
	return(x)
	}
	
//var i = 2;
	//funzione della post: crea una nuova task
var post_tasks = (body,i) => {
	//i += 1;
	//console.log(i);
	//const new_domanda = body.tipologia.domanda
    //const new_taskid = new_domanda.replace(/\s/g, '') //da sistemare perché al momento scrive "prova 2" - guarda client.js
	//body = {tipologia: ''}
	//console.log(body.tipologia);
	if(body==null || isNaN(i)) {
		return('errore')
	} else if(body.tipologia==false || body.tipologia==null) {
		return('errore')
	}
	else if(body.tipologia.domanda==false || body.tipologia.domanda==null) {
		return('errore')
	} 
	else {
		const new_task =  {taskid:i, tipologia:body.tipologia}
		return(new_task)
	}
}

var get_id = (id) => {
	for(let i=0;i<risorse.tasks.length;i++) {
		//console.log(risorse.tasks[i].taskid)
		if(risorse.tasks[i].taskid==id) {
			return(risorse.tasks[i])
		}
	}
	return('errore');
}
	
//exports.i = i
module.exports={get_tasks,post_tasks,get_id}