const get_answers = require('./answers').answers_get
const post_answers = require('./answers').answers_post

var answer_valido1 = {taskid: 1, 
	userid:1 ,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido1 = null;	

var answer_nonvalido2 =	{
	userid:1 ,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};	

var answer_nonvalido3 =	{taskid: 1, 
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido4 = {taskid: 1, 
	userid:1 , 
	tempo: '2018-01-30T17:12:47'
};						

var answer_nonvalido5 =	{taskid: 1, 
	userid:1 ,
	risposta: '', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido6 =	{taskid: 1, 
	userid:1 ,
	risposta: '', 
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

test('answerid mancante', () => {
	expect(post_answers(answer_valido1)).toEqual('errore');
});

test('answer null', () => {
	expect(post_answers(answer_nonvalido1,1)).toEqual('errore');
});

test('answer con taskid assente', () => {
	expect(post_answers(answer_nonvalido2,1)).toEqual('errore');
});

test('answer con userid assente', () => {
	expect(post_answers(answer_nonvalido3,1)).toEqual('errore');
});

test('answer con risposta assente', () => {
	expect(post_answers(answer_nonvalido4,1)).toEqual('errore');
});

test('answer con risposta vuota', () => {
	expect(post_answers(answer_nonvalido5,1)).toEqual('errore');
});

test('answer con risposta assente', () => {
	expect(post_answers(answer_nonvalido6,1)).toEqual('errore');
});

test('answer con i passato NaN', () => {
	expect(post_answers(answer_valido1,'a')).toEqual('errore');
});