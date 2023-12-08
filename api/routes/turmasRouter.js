const { Router } = require('express');

const TurmasCrontroler = require('../controllers/TurmaController');

const router = Router();

router
	.get('/turmas', TurmasCrontroler.pegaTodasAsTurmas)
	.get('/turmas/:id', TurmasCrontroler.pegaUmaTurma)
	.put('/turmas', TurmasCrontroler.criaTurma);

module.exports = router;