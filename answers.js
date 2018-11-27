var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

	//funzione della get: non fa altro se non ritornare l'elemento desiderato
var answers_get = (x) => {
	return(x)
}
	

	//funzione della post: crea una nuova answers
var answers_post = (body,i) => {
	//const new_name = x
    //const new_id = new_name.replace(/\s/g, '') //da sistemare perché al momento scrive "answer_prova 2" - guarda client.js
    const new_answer = {answerid:i, taskid: body.taskid, user: body.user, risposta: body.risposta, tempo: body.tempo} //{id:new_id, answer_name:new_name}
    return(new_answer)
}
	
module.exports={answers_get,answers_post}