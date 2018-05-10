const methods = require('../../controllers/methods');
const controllerDashboard = require('../../controllers/dashboard');
module.exports = (application) => {
    application.get('/dashboard', methods.protectRoute, (req, res) => {controllerDashboard.renderIndex(application, req, res)});
    application.get('/dashboard/sair', methods.protectRoute, (req, res) => {controllerDashboard.sairDashboard(application, req, res)});
    application.get('/dashboard/ver-processo/:id', methods.protectRoute, (req,res) => { controllerDashboard.verProcesso(application, req, res) });
    application.get('/dashboard/baixar-processo/:id', methods.protectRoute, (req,res) => { controllerDashboard.enviarArquivo(application, req, res) });
    application.get('/dashboard/atualizar-status-processo', methods.protectRoute, (req,res) => { 
        controllerDashboard.viewStatusProcesso(application, req, res);
    });
    application.get('/dashboard/realizar-atualizacao-status-processo/:id', methods.protectRoute, (req,res) => { 
        controllerDashboard.viewRealizarStatusProcesso(application, req, res);
    });
    application.post('/dashboard/realizar-atualizacao-status-processo/', methods.protectRoute, (req,res) => { 
        controllerDashboard.realizarAtualizacaoStatus(application, req, res);
    });
    application.get('/dashboard/obter-processos/:busca', methods.protectRoute, (req,res) => { controllerDashboard.buscarProcesso(application, req, res)});
    application.get('/dashboard/processos-pausados', methods.protectRoute, (req,res) => { 
        controllerDashboard.buscarProcessoPausado(application, req, res);
    });  
};
