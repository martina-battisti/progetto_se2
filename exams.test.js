const get_exams = require('./exams').get_exams
const post_exams = require('./exams').post_exams
//const get_exams_by_id = require ('./exams').get_exams_by_id
var risorse = require('./risorse')
const get_id_exams = require('./exams').get_id

//exam valido senza id per post
var exam_valido1 = {
                    
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}
                        
//exam non inserito 
var exam_nonvalido1 = null;

//exam con creator null senza id per post
var exam_nonvalido2 = {
                    creator: null,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}

//exam con tasks null senza id per post
var exam_nonvalido3 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: null, 
                    groups: [12,13,14]
    
}

//exam con groups null senza id per post
var exam_nonvalido4 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: null
    
}

//exam con titolo null senza id per post
var exam_nonvalido5 = {
                    creator: 12,
                    titolo: null,
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}

//exam non valido con array di tasks con id negativi senza id per post
var exam_nonvalido6 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,-2,3,4], 
                    groups: [12,13,14]
    
}
//exam non valido con array di tasks con characters senza id per post
var exam_nonvalido7 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,'c',4], 
                    groups: [12,13,14]
    
}
//exam non valido con array di tasks senza interi solo characters senza id per post
var exam_nonvalido8 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: ['a','b','c','d'], 
                    groups: [12,13,14]
    
}
//exam non valido con groups di tasks con id negativi senza id per post
var exam_nonvalido9 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [-12,13,14]
    
}
//exam non valido con groups di tasks con characters senza id per post
var exam_nonvalido10 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,'c',14]
    
}
//exam non valido con groups di tasks senza interi solo characters senza id per post
var exam_nonvalido11 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: ['a','b','c','d']
    
}

//exam non valido con tasks vuoto senza id per post
var exam_nonvalido12 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [], 
                    groups: [12,13,14]
    
}

//exam non valido con groups vuoto senza id per post
var exam_nonvalido13 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: []
    
}

var exam_valido2 = {
                examid: 2,
                titolo: 'prova',
                creator: 1,
                tasks: [ 0, 1 ],
                groups: [ 4, 6, 8 ]
}

//TEST SULLA POST 

// TASK VALIDI

test('Restituisce quello che passo correttamente', () => {
	expect(get_exams('a')).toBe('a');
});

test('Crea nuovo exams con parametri passati', () => {
	//var i = tasks.i
	expect(post_exams(exam_valido1,1)).toEqual({examid:1, titolo:exam_valido1.titolo, creator:exam_valido1.creator, tasks:exam_valido1.tasks, groups:exam_valido1.groups });
});

test('Get exam con id correttamente', () => {
	expect(get_id_exams(1)).toEqual(risorse.exams[0]);
});

//TASK NON VALIDI

test('Get exam con id inesistente', () => {
	expect(get_id_exams(999999)).toEqual('errore');
});

test('exam non inserito', () => {
	expect(post_exams(exam_nonvalido1,1)).toEqual('errore');
});

test('exam con creator null', () => {
	expect(post_exams(exam_nonvalido2,1)).toEqual('errore');
});

test('exam con tasks null', () => {
	expect(post_exams(exam_nonvalido3,1)).toEqual('errore');
});

test('exam con groups null', () => {
	expect(post_exams(exam_nonvalido4,1)).toEqual('errore');
});

test('exam con titolo null', () => {
	expect(post_exams(exam_nonvalido5,1)).toEqual('errore');
});

test('exam con id NaN', () => {
	expect(post_exams(exam_valido1,'c')).toEqual('errore');
});


test('exam con id < 0', () => {
	expect(post_exams(exam_valido1,-1)).toEqual('errore');
});

test('exam con troppi argomenti', () => {
	expect(post_exams(exam_valido1,1,2)).toEqual('errore');
});

test('exam con troppi pochi argomenti', () => {
	expect(post_exams(exam_valido1)).toEqual('errore');
});

test('exam con passato per parametri un array di creators', () => {
	expect(post_exams(exam_valido1,[1,2])).toEqual('errore');
});

test('exam non valido con array di tasks con id negativi', () => {
	expect(post_exams(exam_nonvalido6, 1)).toEqual('errore');
});

test('exam non valido con array di tasks con characters', () => {
	expect(post_exams(exam_nonvalido7, 1)).toEqual('errore');
});

test('exam non valido con array di tasks senza interi solo characters', () => {
	expect(post_exams(exam_nonvalido8, 1)).toEqual('errore');
});

test('exam non valido con array di groups con id negativi', () => {
	expect(post_exams(exam_nonvalido9, 1)).toEqual('errore');
});

test('exam non valido con array di groups con characters', () => {
	expect(post_exams(exam_nonvalido10, 1)).toEqual('errore');
});

test('exam non valido con array di groups senza interi solo characters', () => {
	expect(post_exams(exam_nonvalido11, 1)).toEqual('errore');
});

test('exam non valido con tasks vuoto', () => {
	expect(post_exams(exam_nonvalido12, 1)).toEqual('errore');
});

test('exam non valido con groups vuoto', () => {
	expect(post_exams(exam_nonvalido13, 1)).toEqual('errore');
});

//TEST SULLA get_exams_by_id

//TEST VALIDI 
/*
test('Get di un esame da un id valido ', () => {
	//var i = tasks.i
	expect(get_exams_by_id(2)).toEqual(exam_valido2);
});
*/
//TEST NON VALIDI 
/*
test('Get di un esame da un id char ', () => {
	//var i = tasks.i
	expect(get_exams_by_id('c')).toEqual('errore');
});

test('Get di un esame da un id negativo ', () => {
	//var i = tasks.i
	expect(get_exams_by_id(-2)).toEqual('errore');
});

test('Get di un esame da un id null ', () => {
	//var i = tasks.i
	expect(get_exams_by_id(null)).toEqual('errore');
});

test('Get di un esame da un id con troppi parametri ', () => {
	//var i = tasks.i
	expect(get_exams_by_id(2,3)).toEqual('errore');
});*/

