const processosController = require('../../../controllers/processosController');
module.exports = (application) => {
    application.get('/novo-processo', (req, res) => { processosController.renderCriarProcesso(req, res) });
    application.post('/novo-processo', (req, res) => { processosController.criarProcesso(req, res); });
    application.get('/buscar-processo/:id', (req, res) => { processosController.pesquisarProcesso(application, req, res) });
}
