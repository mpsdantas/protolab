const orcamentosController = require('../../../controllers/orcamentosControllers');
module.exports = (application) => {
    application.get('/novo-orcamento', (req, res) => { res.render('public/novo-orcamento')});
    application.post('/novo-orcamento', (req, res) => { orcamentosController.criarOrcamento(application, req, res)});
}
