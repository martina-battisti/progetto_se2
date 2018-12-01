const get_tasks = require('./tasks').get_tasks
const post_tasks = require('./tasks').post_tasks
//var tasks = require('./tasks')


var task_valido1 = 	{tipologia: 
						{domanda: 'Prima domanda radiobox?', 
						 options: [{choice: 'Prima scelta', selection: false},
								   {choice: 'Seconda scelta', selection: false},
								   {choice: 'Terza scelta', selection: false}], 
						 risposta: 'Prima risposta'
						}
					};
			
var task_valido2 = 	{tipologia:
						{domanda: 'Prima domanda checkbox?', 
						 options: [{choice: 'Prima scelta', selection: false},
								   {choice: 'Seconda scelta', selection: false},
								   {choice: 'Terza scelta', selection: false}],
						 risposta: ['Prima risposta','Seconda risposta']
						}
					};		
					
var task_valido3 = 	{tipologia:
						{domanda: 'Prima domanda aperta', 
						 risposta: 'Prima risposta'
						}
					};
					
var task_nonvalido1 = null;	

var task_nonvalido2 =	{tipologia:
							{domanda: '', 
							 risposta: 'Prima risposta'
							}
						};	

var task_nonvalido3 =	{tipologia:
							{risposta: 'Prima risposta'}
						};	

var task_nonvalido4 = {tipologia: null};						
					
var task_nonvalido5 =	{domanda: 'a', 
						 risposta: 'Prima risposta'
						};	
					
					
//VALIDI
					
test('Restituisce quello che passo correttamente', () => {
	expect(get_tasks('a')).toBe('a');
});

test('Crea nuova task con parametro passato', () => {
	//var i = tasks.i
	expect(post_tasks(task_valido1,1)).toEqual({taskid: 1, tipologia: task_valido1.tipologia});
	expect(post_tasks(task_valido2,2)).toEqual({taskid: 2, tipologia: task_valido2.tipologia});
	expect(post_tasks(task_valido3,3)).toEqual({taskid: 3, tipologia: task_valido3.tipologia});	
});


//NON VALIDI

test('task non inserito', () => {
	expect(post_tasks(task_nonvalido1,1)).toEqual('errore');
});

test('task con domanda vuota', () => {
	expect(post_tasks(task_nonvalido2,1)).toEqual('errore');
});

test('task con domanda assente', () => {
	expect(post_tasks(task_nonvalido3,1)).toEqual('errore');
});

test('task con tipologia null', () => {
	expect(post_tasks(task_nonvalido4,1)).toEqual('errore');
});

test('task con tipologia assente', () => {
	expect(post_tasks(task_nonvalido5,1)).toEqual('errore');
});

test('task con i passato NaN', () => {
	expect(post_tasks(task_valido1,'a')).toEqual('errore');
});