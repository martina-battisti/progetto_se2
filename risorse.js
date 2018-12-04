var choice = [{choice: 'Prima scelta', selection: false},
			  {choice: 'Seconda scelta', selection: false},
			  {choice: 'Terza scelta', selection: false}];
var radiobox = {domanda: 'Prima domanda radiobox?', options: choice, risposta: 'Prima risposta'};
var checkbox = {domanda: 'Prima domanda checkbox?', options: choice, risposta: ['Prima risposta','Seconda risposta']};
var aperta = {domanda: 'Prima domanda aperta', risposta: 'Prima risposta'}
var tasks = [{taskid: 1, tipologia: checkbox},
			 {taskid: 2, tipologia: aperta}];
			 
exports.tasks = tasks;

var users = [{userID: 1, username: 'lscotch', nome: 'Laura', cognome: 'Scoccianti', email:'laurascotch@live.it', matricola: 185765},
			 {userID: 2, username: 'ppall', nome: 'Pinco', cognome: 'Pallino', email:'pp@mail.it', matricola: 123456}];

exports.users = users;