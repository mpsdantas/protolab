const authenticationController = require('../../../controllers/authenticationController');
module.exports = (application) => {
    application.get('/login', (req, res) => { res.render('public/login') });
    application.get('/criar-nova-conta', (req, res) => { res.render('public/novo-usuario') });
    application.post('/verificar-email-novo-usuario', (req, res) => { authenticationController.verificarUsuario(application, req, res) });
    application.post('/criar-novo-usuario', (req, res) => { authenticationController.criarNovoUsuario(application, req, res)});
    
}
