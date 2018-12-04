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

var answer_nonvalido3 = {taskid: 'a', 
	userid:1 ,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido4 = {taskid: -1, 
	userid:1 ,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido5 = {taskid: 0, 
	userid:1 ,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido6 = {taskid: 1.002, 
	userid:1 ,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido7 =	{taskid: 1, 
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido8 = {taskid: 1, 
	userid: 'a',
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido9 = {taskid: 1, 
	userid:-1,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido10 = {taskid: 1, 
	userid:0,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido11 = {taskid: 1, 
	userid:1.002 ,
	risposta: 'Prima risposta', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido12 = {taskid: 1, 
	userid: null ,
	risposta: 'Prima risposta',
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido13 = {taskid: 1, 
	userid:1 , 
	tempo: '2018-01-30T17:12:47'
};						

var answer_nonvalido14 =	{taskid: 1, 
	userid:1 ,
	risposta: '', 
	tempo: '2018-01-30T17:12:47'
};

var answer_nonvalido15 = {taskid: 1, 
	userid:1 ,
	risposta: 'Prima risposta'
};

var answer_nonvalido16 = {taskid: 1, 
	userid:1 ,
	risposta: 'Prima risposta',
	tempo: ''
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

test('answerid mancante (solo primo parametro)', () => {
	expect(post_answers(answer_valido1)).toEqual('errore');
});

test('answerid mancante (solo secondo parametro)', () => {
	expect(post_answers(1)).toEqual('errore');
});

test('answer null', () => {
	expect(post_answers(answer_nonvalido1,1)).toEqual('errore');
});

test('answer con taskid assente', () => {
	expect(post_answers(answer_nonvalido2,1)).toEqual('errore');
});

test('answer con taskid NaN', () => {
	expect(post_answers(answer_nonvalido3,1)).toEqual('errore');
});

test('answer con taskid negativo', () => {
	expect(post_answers(answer_nonvalido4,)).toEqual('errore');
});

test('answer con taskid 0', () => {
	expect(post_answers(answer_nonvalido5,)).toEqual('errore');
});

test('answer con taskid reale', () => {
	expect(post_answers(answer_nonvalido6,)).toEqual('errore');
});

test('answer con userid assente', () => {
	expect(post_answers(answer_nonvalido7,1)).toEqual('errore');
});

test('answer con userid NaN', () => {
	expect(post_answers(answer_nonvalido8,1)).toEqual('errore');
});

test('answer con userid negativo', () => {
	expect(post_answers(answer_nonvalido9,1)).toEqual('errore');
});

test('answer con userid 0', () => {
	expect(post_answers(answer_nonvalido10,1)).toEqual('errore');
});

test('answer con userid reale', () => {
	expect(post_answers(answer_nonvalido11,1)).toEqual('errore');
});

test('answer con userid null', () => {
	expect(post_answers(answer_nonvalido12,1)).toEqual('errore');
});

test('answer con risposta assente', () => {
	expect(post_answers(answer_nonvalido13,1)).toEqual('errore');
});

test('answer con risposta vuota', () => {
	expect(post_answers(answer_nonvalido14,1)).toEqual('errore');
});

test('answer con tempo assente', () => {
	expect(post_answers(answer_nonvalido15,1)).toEqual('errore');
});

test('answer con tempo vuoto', () => {
	expect(post_answers(answer_nonvalido16,1)).toEqual('errore');
});

test('answer con i passato NaN', () => {
	expect(post_answers(answer_valido1,'a')).toEqual('errore');
});