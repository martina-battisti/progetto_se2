const get_exams = require('./exams').get_exams
const post_exams = require('./exams').post_exams

var exam_valido1 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}
                        

var exam_nonvalido1 = null;

var exam_nonvalido2 = {
                    creator: null,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
}

var exam_nonvalido3 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: null, 
                    groups: [12,13,14]
    
}

var exam_nonvalido4 = {
                    creator: 12,
                    titolo: 'prova',
                    tasks: [1,2,3,4], 
                    groups: null
    
}


var exam_nonvalido5 = {
                    creator: 12,
                    titolo: null,
                    tasks: [1,2,3,4], 
                    groups: [12,13,14]
    
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