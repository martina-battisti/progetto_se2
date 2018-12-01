const get_exams = require('./exams').get_exams
const post_exams = require('./exams').post_exams

test('Restituisce quello che passo correttamente', () => {
	expect(get_exams('a')).toBe('a');
});

test('post exam corrisponde', () => {  //DA MODIFICARE
	expect(post_exams({
        creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456}, 
        tasks: [
            {taskid: 1, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}, 
            {taskid: 2, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}], 
        groups: [
            {groupid: 1, componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]}, 
            {groupid: 2, componenti: [{username: 'provaUser2', nome: 'Firstname2', cognome: 'Lastname2', email:'prova2@mail.it', matricola: 123650},
                                      {username: 'provaUser1', nome: 'Firstname1', cognome: 'Lastname1', email:'prova1@mail.it', matricola: 123655}]} ] },3)).toEqual({
        examid: 3, 
        creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456}, 
        tasks: [
            {taskid: 1, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}, 
            {taskid: 2, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}], 
        groups: [
            {groupid: 1, componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]}, 
            {groupid: 2, componenti: [{username: 'provaUser2', nome: 'Firstname2', cognome: 'Lastname2', email:'prova2@mail.it', matricola: 123650},
                                      {username: 'provaUser1', nome: 'Firstname1', cognome: 'Lastname1', email:'prova1@mail.it', matricola: 123655}]} ] });
});

/*
test('post exam senza creator', () => {  //DA MODIFICARE
	expect(post_exams({
        examsid: 4, 
        creator: null, 
        tasks: [
            {taskid: 1, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}, 
            {taskid: 2, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}], 
        groups: [
            {groupid: 1, componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]}, 
            {groupid: 2, componenti: [{username: 'provaUser2', nome: 'Firstname2', cognome: 'Lastname2', email:'prova2@mail.it', matricola: 123650},
                                      {username: 'provaUser1', nome: 'Firstname1', cognome: 'Lastname1', email:'prova1@mail.it', matricola: 123655}]} ] })).toEqual(null);
});


test('post exam senza tasks', () => {  //DA MODIFICARE
	expect(post_exams({
        examsid: 5, 
        creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456}, 
        tasks: null, 
        groups: [
            {groupid: 1, componenti: [{username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123654}]}, 
            {groupid: 2, componenti: [{username: 'provaUser2', nome: 'Firstname2', cognome: 'Lastname2', email:'prova2@mail.it', matricola: 123650},
                                      {username: 'provaUser1', nome: 'Firstname1', cognome: 'Lastname1', email:'prova1@mail.it', matricola: 123655}]} ] })).toEqual(null);
});

test('post exam senza groups', () => {  //DA MODIFICARE
	expect(post_exams({
        examsid: 6, 
        creator: {username: 'provaUser', nome: 'Firstname', cognome: 'Lastname', email:'prova@mail.it', matricola: 123456}, 
        tasks: [
            {taskid: 1, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}, 
            {taskid: 2, tipologia: {domanda: 'Prima domanda radiobox?', options: [{choice: 'Prima scelta', selection: false},{choice: 'Seconda scelta', selection: false},{choice: 'Terza scelta', selection: false}], risposta: 'Prima risposta'}}], 
        groups: null})).toEqual(null);
});

*/