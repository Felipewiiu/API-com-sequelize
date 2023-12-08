const { Router } = require('express');

const NivelController = require('../controllers/NivelController.js');

const router = Router();


router
	.get('/niveis', NivelController.pegaTodosOsNiveis)// criação dos andPoits
	.get('/niveis/:id', NivelController.pegaUmNivel)
	.post('/niveis', NivelController.criaNivel)
	.put('/niveis/:id', NivelController.atualizaNivel)
	.delete('/niveis/:id', NivelController.apagaNivel);

module.exports = router;