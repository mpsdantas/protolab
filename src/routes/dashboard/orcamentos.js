const methods = require('../../controllers/methods');
const controllerDashboard = require('../../controllers/dashboard');
module.exports = (application) => {
    application.get('/dashboard/ver-orcamento/:id', methods.protectRoute, (req, res) => {
        controllerDashboard.verOrcamento(application, req, res)
    });
    application.get('/dashboard/realizar-atualizacao-status-orcamento/:id', methods.protectRoute, (req, res) => {
        controllerDashboard.viewRealizarStatusOrcamento(application, req, res);
    });
    application.post('/dashboard/realizar-atualizacao-status-orcamento/', methods.protectRoute, (req, res) => {
        controllerDashboard.realizarAtualizacaoStatusOrcamento(application, req, res);
    });
};