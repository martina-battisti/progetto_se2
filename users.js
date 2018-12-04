//var api = require('./api')
var bodyParser = require('body-parser')
const express = require('express')
const app = express()

var risorse = require('./risorse')
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

	//funzione della get: non fa altro se non ritornare l'elemento desiderato
var users_get = (x) => {
	return(x)
}
	

	//funzione della post: crea una nuova task
//var users_post = (x) => {
	/*const new_name = x
    const new_id = new_name.replace(/\s/g, '') //da sistemare perché al momento scrive "utente_prova 2" - guarda client.js
    const new_user =  {id:new_id, user_name:new_name}
	return(new_user)*/
//	const new_user = x;
	//const new_username = x.username;
//	return(new_user);
//}

var users_post = (userid,body) => {
	//id += 1;
	//console.log(i);
	if(body==null) {
		return('errore')
	}
	else if(userid==false || isNaN(userid) || !(Number.isInteger(userid))){
		//console.log("userID non inserito/non valido")
		return('errore')
	}
	else if(body.username==false || body.username==null) {
		//console.log("username non inserita")
		return('errore')
	}
	else if(body.matricola==false || body.matricola==null) {
		//console.log("numero di matricola non inserito")
		return('errore')
	}
	else if(body.email==false || body.email==null) {
		//console.log("indirizzo email non inserito")
		return('errore')
	}
	else if(body.matricola.toString().length != 6) {
		//console.log("questo non è un numero di matricola")
		return('errore')
	}
	else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email))){
		//console.log("email non valida")
		return('errore')
	}
	else {
		const new_user =  {userID: userid, username:body.username, nome:body.nome, cognome:body.cognome, email:body.email, matricola:body.matricola}
		return(new_user)
	}
}

var get_id = (id) => {
	for(let i=0;i<risorse.users.get.length;i++) {
		//console.log(risorse.users[i].userid)
		if(risorse.users[i].userid==id) {
			return(risorse.users[i])
		}
	}
	return('errore');
}
	

module.exports={get_users,post_users,get_id}