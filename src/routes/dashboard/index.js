const methods = require('../../controllers/methods');
const controllerDashboard = require('../../controllers/dashboard');
module.exports = (application) => {
    application.get('/dashboard', methods.protectRoute, (req, res) => {controllerDashboard.renderIndex(application, req, res)});
    application.get('/dashboard/sair', methods.protectRoute, (req, res) => {controllerDashboard.sairDashboard(application, req, res)});
    application.get('/dashboard/ver-processo/:id', methods.protectRoute, (req,res) => { controllerDashboard.verProcesso(application, req, res) });
};
