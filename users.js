//var api = require('./api')
var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

	//funzione della get: non fa altro se non ritornare l'elemento desiderato
var users_get = (x) => {
	return(x)
}

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

var users_put = (toModify,oldUser) => {
	/*if(arguments.length !== 2)
		return 'errore';*/
	if(toModify == null){
		return('errore');
	}else{
		if(!toModify.nome || !toModify.cognome || !toModify.email || !toModify.matricola || oldUser.userID !== toModify.userID){
			return 'errore';
		}else{
			if(toModify.username != ''){ oldUser = {userID: oldUser.userID, username: toModify.username, nome: oldUser.nome, cognome: oldUser.cognome, email: oldUser.email, matricola: oldUser.matricola} }
			if(toModify.nome != ''){ oldUser = {userID: oldUser.userID, username: oldUser.username, nome: toModify.nome, cognome: oldUser.cognome, email: oldUser.email, matricola: oldUser.matricola} }
			if(toModify.cognome != ''){ oldUser = {userID: oldUser.userID, username: oldUser.username, nome: oldUser.nome, cognome: toModify.cognome, email: oldUser.email, matricola: oldUser.matricola} }
			if(toModify.email != ''){ oldUser = {userID: oldUser.userID, username: oldUser.username, nome: oldUser.nome, cognome: oldUser.cognome, email: toModify.email, matricola: oldUser.matricola} }
			if(toModify.username != ''){ oldUser = {userID: oldUser.userID, username: oldUser.username, nome: oldUser.nome, cognome: oldUser.cognome, email: oldUser.email, matricola: toModify.matricola} }
			
			if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(oldUser.email))){
				//console.log("email non valida")
				return('errore')
			}
			
			if(oldUser.matricola.toString().length != 6) {
				//console.log("questo non è un numero di matricola")
				return('errore')
			}
			
			return(oldUser)
			
		}
	}
}

module.exports={users_get,users_post,users_put}