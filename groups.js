var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

	//funzione della get: non fa altro se non ritornare l'elemento desiderato
var get_groups = (x) => {
	return(x)
	}
	

	//funzione della post: crea un nuovo gruppo
var post_groups = (x) => {
	const new_group = x
    return(new_group)
}
	
module.exports={get_groups,post_groups}