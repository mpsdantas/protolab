const dashboard = require('../../controllers/dashboard');
const methods = require('../../controllers/methods');
module.exports = (application) => {
    application.get('/dashboard/novo-usuario', methods.protectRoute, (req, res) => {
       dashboard.viewNovoUsuario(application, req, res);
    });
    application.get('/dashboard/ver-todos-usuario', methods.protectRoute, (req, res) => {
        dashboard.viewTodosUsuarios(application, req, res);
     });
    application.post('/dashboard/novo-usuario', methods.protectRoute, (req, res) => {
        dashboard.novoUsuario(application, req, res);
     });
};