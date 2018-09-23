const methods = require('../../controllers/methods');
const controllerDashboard = require('../../controllers/dashboard');
module.exports = (application) => {
    application.get('/dashboard/ver-orcamento/:id', methods.protectRoute, (req, res) => {
        controllerDashboard.verOrcamento(application, req, res)
    });
    application.get('/dashboard/realizar-atualizacao-status-orcamento/:id', methods.protectRoute, (req, res) => {
        controllerDashboard.viewRealizarStatusOrcamento(application, req, res);
    });
    application.get('/dashboard/todos-orcamentos', methods.protectRoute, (req, res) => {
        controllerDashboard.viewTodosOsOrcamentos(application, req, res);
    });
    application.get('/dashboard/obter-orcamentos-faixa-data/:dataInicial/:dataFinal', methods.protectRoute, (req, res) => {
        controllerDashboard.buscarOrcamentosData(application, req, res);
    });
    application.get('/dashboard/orcamentos-pausados', methods.protectRoute, (req, res) => {
        controllerDashboard.buscarOrcamentoPausado(application, req, res);
    });
    application.get('/dashboard/buscar-orcamentos', methods.protectRoute, (req, res) => {
        controllerDashboard.viewBuscarOrcamentos(application, req, res);
    });
    application.get('/dashboard/obter-orcamentos/:busca', methods.protectRoute, (req, res) => {
        controllerDashboard.buscarOrcamento(application, req, res);
    });
    
    application.post('/dashboard/realizar-atualizacao-status-orcamento/', methods.protectRoute, (req, res) => {
        controllerDashboard.realizarAtualizacaoStatusOrcamento(application, req, res);
    });

    application.get('/dashboard/baixar-orcamento/:id', methods.protectRoute, (req, res) => { controllerDashboard.enviarOrcamento(application, req, res) });
};