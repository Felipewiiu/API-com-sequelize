// Bom deixar registrado que esse arquivo é o ponto de entrada das rotas

const bodyParse = require('body-parser');
const pessoas = require('./pessoasRoute.js');
const nivel = require('./niveisRoute.js');
const turmas = require('./turmasRouter.js');

module.exports = app => { // registrar as rotas
	app.use(bodyParse.json());
	app.use(pessoas);
	app.use(nivel);
	app.use(turmas);

	
};