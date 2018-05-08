const mensagensController = require('../../../controllers/mensagensController');
module.exports = (application) => {
    application.get('/contato', (req, res) => { res.render('public/contato') });
    application.post('/nova-mensagem', (req, res) => {mensagensController.enviarMensagemPublica(application, req, res)});
    application.get('/buscar-mensagens/:codigo', (req, res) => {mensagensController.buscarMensagens(application, req, res)});
}
