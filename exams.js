var bodyParser = require('body-parser')
const express = require('express')
const app = express()
var risorse = require('./risorse')


app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

var get_exams = (x) => {
	return(x)
}

function post_exams(body,i){ 
    if(body==null || isNaN(i) || i<0 || arguments.length!==2) {
		return('errore')
	} else if(body.creator == false || body.creator == null){
        //console.log('creator non inserita')
        return('errore')
    } else if(body.titolo == false || body.titolo == null){
        //console.log('titolo non inserito')
        return('errore')
    }else if(body.tasks == false || body.tasks == null){
        //console.log('tasks non inserite')

        return('errore')
        
    } else if(body.tasks.some((n)=> {return n<=0} )  || !body.tasks.every(Number.isInteger)){
        return('errore')
    } else if(body.groups == false || body.groups == null){
        //console.log('groups non inseriti')
        return('errore')
    } else if(body.groups.some((n)=> {return n<=0} )  || !body.groups.every(Number.isInteger)){
        return('errore')
    /*} else if(body.groups == false || body.groups == null){
        //console.log('groups non inseriti')
        return('errore')*/
    } else{
        const new_exam = {examid:i, titolo:body.titolo, creator:body.creator, tasks:body.tasks, groups:body.groups};
        return(new_exam);
    }
}

var get_id = (id) => {
	for(let i=0;i<risorse.exams.length;i++) {
		if(risorse.exams[i].examid==id) {
			return(risorse.exams[i])
		}
	}
	return('errore');
}
	

//module.exports={get_exams,post_exams,get_exams_by_id}
module.exports={get_exams,post_exams,get_id}