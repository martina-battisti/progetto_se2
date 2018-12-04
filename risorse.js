var choice = [{choice: 'Prima scelta', selection: false},
			  {choice: 'Seconda scelta', selection: false},
			  {choice: 'Terza scelta', selection: false}];
var radiobox = {domanda: 'Prima domanda radiobox?', options: choice, risposta: 'Prima risposta'};
var checkbox = {domanda: 'Prima domanda checkbox?', options: choice, risposta: ['Prima risposta','Seconda risposta']};
var aperta = {domanda: 'Prima domanda aperta', risposta: 'Prima risposta'}
var tasks = [{taskid: 1, tipologia: checkbox},
			 {taskid: 2, tipologia: aperta}];
			 
			 
var answers = [{answerid: 1, taskid: 1, userid: 1, tempo: '2018-01-30T17:12:47'},
			   {answerid: 2, taskid: 2, userid: 2, tempo: '2018-02-30T17:12:47'}];
			 
var groups = [{groupid: 1, titolo: "prova1", componenti: [1, 2]},
			  {groupid: 2, titolo: "prova2", componenti: [1]}];			 
			 
exports.tasks = tasks;
exports.answers = answers;
exports.groups = groups;