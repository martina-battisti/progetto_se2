//var api = require('./api')
var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

	//funzione della get: non fa altro se non ritornare l'elemento desiderato
var f1 = (x) => {
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
	//console.log(api.tasks);
	return(x)
	}
	

	//funzione della post: crea una nuova task
var f2 = (x) => {
	const task_name = x
    const new_id = task_name.replace(/\s/g, '') //da sistemare perché al momento scrive "prova 2" - guarda client.js
    const new_task =  {id:new_id, name:task_name}
    return(new_task)
}
	
module.exports={f1,f2}