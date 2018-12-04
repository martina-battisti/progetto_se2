var choice = [{choice: 'Prima scelta', selection: false},
			  {choice: 'Seconda scelta', selection: false},
			  {choice: 'Terza scelta', selection: false}];
var radiobox = {domanda: 'Prima domanda radiobox?', options: choice, risposta: 'Prima risposta'};
var checkbox = {domanda: 'Prima domanda checkbox?', options: choice, risposta: ['Prima risposta','Seconda risposta']};
var aperta = {domanda: 'Prima domanda aperta', risposta: 'Prima risposta'}
var tasks = [{taskid: 1, tipologia: checkbox},
			 {taskid: 2, tipologia: aperta}];
			 
exports.tasks = tasks;