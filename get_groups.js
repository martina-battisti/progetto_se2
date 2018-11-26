var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

	//funzione della get: non fa altro se non ritornare l'elemento desiderato
var get_groups = (x) => {
	return(x)
	}
	
/*
	//funzione della post: crea una nuova task
var post_groups = (x) => {
	const group_name = x
    const new_id = group_name.replace(/\s/g, '') //da sistemare perché al momento scrive "prova 2" - guarda client.js
    const new_group =  {id:new_id, name:group_name} //DA MODIFICARE
    return(new_group)
}
*/
	
module.exports={get_groups,/*post_groups*/}