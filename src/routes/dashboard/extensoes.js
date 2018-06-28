const dashboard = require('../../controllers/dashboard');
const methods = require('../../controllers/methods');
module.exports = (application) => {
    application.get('/dashboard/extensoes-permitidas', methods.protectRoute, (req, res) => {
        dashboard.renderExtensoes(application, req, res);
    });
    application.post('/dashboard/extensoes-permitidas', methods.protectRoute, (req, res) => {
        dashboard.adicionarNovaExtensao(application, req, res);        
    });
    application.delete('/dashboard/extensoes-permitidas', methods.protectRoute, (req, res) => {
        dashboard.deleteExtensao(application, req, res);        
    });
};