const mongoose = require('mongoose');
const Mensagem = mongoose.model('Mensagens');
exports.viewMensagens = async (application, req, res) => {
    const mensagensLidas = await Mensagem.find({lido:true});
    const mensagensNaoLidas = await Mensagem.find({lido:false});
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/mensagens/mensagens',{nome, emailUser, tipoUsuario, mensagensLidas, mensagensNaoLidas});
};
