const get_answers = require('./answers').answers_get
const post_answers = require('./answers').answers_post

var answer_valido1 = {taskid: 1, 
	userid:1 ,
	 risposta: 'Prima risposta', 
	 tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido1 = null;	

var answer_nonvalido2 =	{risposta:
		{ 
		 risposta: ''
		}
	};	

var answer_nonvalido3 =	{risposta:
		{risposta: 'Prima risposta'}
	};	

var answer_nonvalido4 = {risposta: null};						

var answer_nonvalido5 =	{risposta: 'a', 
	 risposta: 'Prima risposta'
	};	



//TEST VALIDI
					
test('Restituisce quello che passo correttamente', () => {
	expect(get_answers('a')).toBe('a');
});

test('Crea nuova task con parametro passato', () => {
	//var i = answers.i
	expect(post_answers(answer_valido1,1)).toEqual({answerid: 1, taskid: answer_valido1.taskid, userid: answer_valido1.userid, risposta: answer_valido1.risposta, tempo: answer_valido1.tempo});

});


//TESTS NON VALIDI

test('answer non inserito', () => {
	expect(post_answers(answer_nonvalido1,1)).toEqual('errore');
});

test('answer con domanda vuota', () => {
	expect(post_answers(answer_nonvalido2,1)).toEqual('errore');
});

test('answer con domanda assente', () => {
	expect(post_answers(answer_nonvalido3,1)).toEqual('errore');
});

test('answer con tipologia null', () => {
	expect(post_answers(answer_nonvalido4,1)).toEqual('errore');
});

test('answer con tipologia assente', () => {
	expect(post_answers(answer_nonvalido5,1)).toEqual('errore');
});

test('answer con i passato NaN', () => {
	expect(post_answers(answer_valido1,'a')).toEqual('errore');
});