const methods = require('../../controllers/methods');
const controllerDashboard = require('../../controllers/dashboard');
module.exports = (application) => {
    application.get('/dashboard/relatorios', methods.protectRoute, (req, res) => {
        controllerDashboard.verScreenRelatorios(req, res);
    });
    application.post('/dashboard/processar-relatorio',methods.protectRoute, (req, res) => {
        controllerDashboard.gerarRelatorio(req, res);
    });
};