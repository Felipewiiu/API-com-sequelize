const { Router } = require('express');

const PessoasController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoasController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoasController.pegaUmaPessoa);
router.post('/pessoas', PessoasController.criaPessoa);
router.put('/pessoas/:id', PessoasController.atualizaPessoa);
router.delete('/pessoas/:id', PessoasController.apagaPessoas);

// aqui ele chama a classe pessoaController e usa seu método


module.exports = router;