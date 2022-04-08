const { Router } = require ('express');
const { pegaUmaPessoa } = require('../controllers/PessoaController');
const PessoaController = require ('../controllers/PessoaController')

const router = Router ()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criarPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)

module.exports = router