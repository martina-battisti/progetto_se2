const get_exams = require('./exams').get_exams
const post_exams = require('./exams').post_exams

//exam valido
var exam_valido1 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}
                        
//exam non inserito
var exam_nonvalido1 = null;

//exam con creator null
var exam_nonvalido2 = {
                    creator: null,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}

//exam con tasks null
var exam_nonvalido3 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: null, 
                    groups: [12,13,14]
    
}

//exam con groups null
var exam_nonvalido4 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: null
    
}

//exam con titolo null
var exam_nonvalido5 = {
                    creator: 12,
                    titolo: null,
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}

//exam non valido con array di tasks con id negativi
var exam_nonvalido6 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,-2,3,4], 
                    groups: [12,13,14]
    
}
//exam non valido con array di tasks con characters
var exam_nonvalido7 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,'c',4], 
                    groups: [12,13,14]
    
}
//exam non valido con array di tasks senza interi solo characters
var exam_nonvalido8 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: ['a','b','c','d'], 
                    groups: [12,13,14]
    
}
//exam non valido con groups di tasks con id negativi
var exam_nonvalido9 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [-12,13,14]
    
}
//exam non valido con groups di tasks con characters
var exam_nonvalido10 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,'c',14]
    
}
//exam non valido con groups di tasks senza interi solo characters
var exam_nonvalido11 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: ['a','b','c','d']
    
}

//exam non valido con tasks vuoto
var exam_nonvalido12 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [], 
                    groups: [12,13,14]
    
}

//exam non valido con groups vuoto
var exam_nonvalido13 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: []
    
}

// TASK VALIDI

test('Restituisce quello che passo correttamente', () => {
	expect(get_exams('a')).toBe('a');
});

test('Crea nuovo exams con parametri passati', () => {
	//var i = tasks.i
	expect(post_exams(exam_valido1,1)).toEqual({examid:1, titolo:exam_valido1.titolo, creator:exam_valido1.creator, tasks:exam_valido1.tasks, groups:exam_valido1.groups });
	
});


//TASK NON VALIDI

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

