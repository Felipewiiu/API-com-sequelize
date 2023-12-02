const { Router } = require('express');

const pessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', pessoaController.pegaTodasAsPessoas);
// aqui ele chama a classe pessoaController e usa seu método


module.exports = router;