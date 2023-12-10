const { Router } = require('express');

const PessoasController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoasController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoasController.pegaUmaPessoa);
router.post('/pessoas', PessoasController.criaPessoa);
router.put('/pessoas/:id', PessoasController.atualizaPessoa);
router.delete('/pessoas/:id', PessoasController.apagaPessoas);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoasController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.apagaMatricula);

// aqui ele chama a classe pessoaController e usa seu método


module.exports = router;