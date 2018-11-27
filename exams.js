var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

var get_exams = (x) => {
	return(x)
}

var post_exams = (body) => {
	
    
    const new_exam = x;
    return(new_exam);
}
	
module.exports={get_exams,post_exams}