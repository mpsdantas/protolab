const authenticationController = require('../../../controllers/authenticationController');
module.exports = (application) => {
    application.get('/login', (req, res) => { res.render('public/login') });
    application.get('/criar-nova-conta', (req, res) => { res.render('public/novo-usuario') });
    application.get('/recuperar-senha', (req, res) => {res.render('public/recuperar-senha')});
    application.get('/realizar-recuperacao', (req, res) => {res.render('public/realizarRecuperacao', {token:req.query.token})});
    application.post('/recuperar-senha', (req, res) => {authenticationController.enviarRecuperarSenha(application, req, res)});
    application.post('/mudar-senha', (req, res) => {authenticationController.mudarSenha(application, req, res)});
    application.post('/verificar-email-novo-usuario', (req, res) => { authenticationController.verificarUsuario(application, req, res) });
    application.post('/criar-novo-usuario', (req, res) => { authenticationController.criarNovoUsuario(application, req, res)});
    application.post('/login', (req, res) => { authenticationController.realizarLogin(application, req, res)});
    
}
