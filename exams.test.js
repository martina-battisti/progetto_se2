const get_exams = require('./exams').get_exams
const post_exams = require('./exams').post_exams

var exam_valido1 = {
                    creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456},
                    titolo: 'prova',
                    tasks: [
                            {taskid: 1, 
                            tipologia: 
                                {domanda: 'Prima domanda radiobox?', 
                            options: [{choice: 'Prima scelta', selection: false},
                                     {choice: 'Seconda scelta', selection: false},
                                      {choice: 'Terza scelta', selection: false}], 
                            risposta: 'Prima risposta'}}, 
                            {taskid: 2, 
                            tipologia: 
                                {domanda: 'Prima domanda radiobox?', 
                             options: [{choice: 'Prima scelta', selection: false},
                                       {choice: 'Seconda scelta', selection: false},
                                       {choice: 'Terza scelta', selection: false}], 
                             risposta: 'Prima risposta'}}], 
                    groups: [
                            {groupid: 1, 
                             componenti: [{username: 'provaUser', 
                                           nome: 'Firstname', 
                                           cognome: 'Lastname', 
                                           email:'prova@mail.it', 
                                           matricola: 123654}]}, 
                            {groupid: 2, 
                             componenti: [{username: 'provaUser2', 
                                           nome: 'Firstname2', 
                                           cognome: 'Lastname2', 
                                           email:'prova2@mail.it',
                                           matricola: 123650},
                                           {username: 'provaUser1',
                                            nome: 'Firstname1', 
                                            cognome: 'Lastname1', 
                                            email:'prova1@mail.it', 
                                            matricola: 123655}]
                            } 
                    ] 
}

var exam_nonvalido1 = null;

var exam_nonvalido2 = {
                    creator: null, 
                    titolo: 'prova',
                    tasks: [
                            {taskid: 1, 
                            tipologia: 
                                {domanda: 'Prima domanda radiobox?', 
                            options: [{choice: 'Prima scelta', selection: false},
                                     {choice: 'Seconda scelta', selection: false},
                                      {choice: 'Terza scelta', selection: false}], 
                            risposta: 'Prima risposta'}}, 
                            {taskid: 2, 
                            tipologia: 
                                {domanda: 'Prima domanda radiobox?', 
                             options: [{choice: 'Prima scelta', selection: false},
                                       {choice: 'Seconda scelta', selection: false},
                                       {choice: 'Terza scelta', selection: false}], 
                             risposta: 'Prima risposta'}}], 
                    groups: [
                            {groupid: 1, 
                             componenti: [{username: 'provaUser', 
                                           nome: 'Firstname', 
                                           cognome: 'Lastname', 
                                           email:'prova@mail.it', 
                                           matricola: 123654}]}, 
                            {groupid: 2, 
                             componenti: [{username: 'provaUser2', 
                                           nome: 'Firstname2', 
                                           cognome: 'Lastname2', 
                                           email:'prova2@mail.it',
                                           matricola: 123650},
                                           {username: 'provaUser1',
                                            nome: 'Firstname1', 
                                            cognome: 'Lastname1', 
                                            email:'prova1@mail.it', 
                                            matricola: 123655}]
                            } 
                    ] 
}

var exam_nonvalido3 = {
                    creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456},
                    titolo: 'prova',
                    tasks: null , 
                    groups: [
                            {groupid: 1, 
                             componenti: [{username: 'provaUser', 
                                           nome: 'Firstname', 
                                           cognome: 'Lastname', 
                                           email:'prova@mail.it', 
                                           matricola: 123654}]}, 
                            {groupid: 2, 
                             componenti: [{username: 'provaUser2', 
                                           nome: 'Firstname2', 
                                           cognome: 'Lastname2', 
                                           email:'prova2@mail.it',
                                           matricola: 123650},
                                           {username: 'provaUser1',
                                            nome: 'Firstname1', 
                                            cognome: 'Lastname1', 
                                            email:'prova1@mail.it', 
                                            matricola: 123655}]
                            } 
                    ] 
}

var exam_nonvalido4 = {
                    creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456},
                    titolo: 'prova',
                    tasks: [
                            {taskid: 1, 
                            tipologia: 
                                {domanda: 'Prima domanda radiobox?', 
                            options: [{choice: 'Prima scelta', selection: false},
                                     {choice: 'Seconda scelta', selection: false},
                                      {choice: 'Terza scelta', selection: false}], 
                            risposta: 'Prima risposta'}}, 
                            {taskid: 2, 
                            tipologia: 
                                {domanda: 'Prima domanda radiobox?', 
                             options: [{choice: 'Prima scelta', selection: false},
                                       {choice: 'Seconda scelta', selection: false},
                                       {choice: 'Terza scelta', selection: false}], 
                             risposta: 'Prima risposta'}}], 
                    groups: null,
}


var exam_nonvalido5 = {
                    creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456},
                    titolo: null,
                    tasks: [
                            {taskid: 1, 
                            tipologia: 
                                {domanda: 'Prima domanda radiobox?', 
                            options: [{choice: 'Prima scelta', selection: false},
                                     {choice: 'Seconda scelta', selection: false},
                                      {choice: 'Terza scelta', selection: false}], 
                            risposta: 'Prima risposta'}}, 
                            {taskid: 2, 
                            tipologia: 
                                {domanda: 'Prima domanda radiobox?', 
                             options: [{choice: 'Prima scelta', selection: false},
                                       {choice: 'Seconda scelta', selection: false},
                                       {choice: 'Terza scelta', selection: false}], 
                             risposta: 'Prima risposta'}}], 
                    groups: [
                            {groupid: 1, 
                             componenti: [{username: 'provaUser', 
                                           nome: 'Firstname', 
                                           cognome: 'Lastname', 
                                           email:'prova@mail.it', 
                                           matricola: 123654}]}, 
                            {groupid: 2, 
                             componenti: [{username: 'provaUser2', 
                                           nome: 'Firstname2', 
                                           cognome: 'Lastname2', 
                                           email:'prova2@mail.it',
                                           matricola: 123650},
                                           {username: 'provaUser1',
                                            nome: 'Firstname1', 
                                            cognome: 'Lastname1', 
                                            email:'prova1@mail.it', 
                                            matricola: 123655}]
                            } 
                    ] 
}



// TASK VALIDI
test('Restituisce quello che passo correttamente', () => {
	expect(get_exams('a')).toBe('a');
});

//TASK NON VALIDI

test('Crea nuovo exams con parametri passati', () => {
	//var i = tasks.i
	expect(post_tasks(exam_valido1,1)).toEqual({examid:1, creator:exam_valido1.creator, tasks:exam_valido1.tasks, groups:exam_valido1.groups });
	
});

test('exam non inserito', () => {
	expect(post_tasks(exam_nonvalido1,1)).toEqual('errore');
});

test('exam con creator null', () => {
	expect(post_tasks(exam_nonvalido2,1)).toEqual('errore');
});

test('exam con tasks null', () => {
	expect(post_tasks(exam_nonvalido3,1)).toEqual('errore');
});

test('exam con groups null', () => {
	expect(post_tasks(exam_nonvalido4,1)).toEqual('errore');
});

test('exam con title null', () => {
	expect(post_tasks(exam_nonvalido5,1)).toEqual('errore');
});

test('exam con id NaN', () => {
	expect(post_tasks(exam_valido1,c)).toEqual('errore');
});