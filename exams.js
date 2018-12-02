var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

var get_exams = (x) => {
	return(x)
}

var post_exams = (body,i) => {  
    if(body==null || isNaN(i)) {
		return('errore')
	} else if(body.creator == false || body.creator == null){
        return('errore')
    }
    else if(body.tasks == false || body.tasks == null){
        return('errore')
    } else if(body.groups == false || body.groups == null){
        return('errore')
    } else{
        const new_exam = {examid:i, creator:body.creator, tasks:body.tasks, groups:body.groups};
        return(new_exam);
    }

    
}
	
module.exports={get_exams,post_exams}