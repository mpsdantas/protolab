const mongoose = require('mongoose');
const Mensagem = mongoose.model('Mensagens');
const ObjectId = require('mongodb').ObjectID;
exports.viewMensagens = async (application, req, res) => {
    const mensagensLidas = await Mensagem.find({lido:true});
    const mensagensNaoLidas = await Mensagem.find({lido:false});
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/mensagens/mensagens',{nome, emailUser, tipoUsuario, mensagensLidas, mensagensNaoLidas});
};
exports.viewMensagemUnica = async(application, req, res) => {
    const mensagem = await Mensagem.findOne({_id: new ObjectId(req.params.id)});
    if(!mensagem.lido) await Mensagem.update({_id: new ObjectId(req.params.id)}, {$set:{lido:true}});
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/mensagens/ver-mensagem',{nome, emailUser, tipoUsuario, mensagem});
}
