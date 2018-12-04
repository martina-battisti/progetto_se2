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
var post_groups = (body,i) => {
	
	
	if(body==null || isNaN(i)) {
		return('errore')
	} else if(body.titolo==false || body.titolo==null) {
		return('errore')
	} else if(body.componenti==false || body.componenti==null) {
		return('errore')
	} else {
		const new_group =  {groupid:i, titolo:body.titolo, componenti:body.componenti}
		return(new_group)
	}
}
	
module.exports={get_groups,post_groups}