const dashboard = require('../../controllers/dashboard');
const methods = require('../../controllers/methods');
module.exports = (application) => {
    application.get('/dashboard/mensagens', methods.protectRoute, (req, res) => {
       dashboard.viewMensagens(application, req, res);
    });
    application.get('/dashboard/vizualizar-mensagem/:id', methods.protectRoute, (req, res) => {
        dashboard.viewMensagemUnica(application, req, res);
    });
    
    application.post('/dashboard/enviar-resposta-mensagem/', methods.protectRoute, (req, res) => {
        dashboard.responderMensagem(application, req, res);
    });
};