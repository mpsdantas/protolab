const mongoose = require('mongoose');
const Orcamento = mongoose.model('Orcamento');

exports.buscarOrcamentoPausado = async (application, req, res) =>{
    const buscaTodosOrcametos = await Orcamento.find({finalizado:false, pausado:true});
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/orcamentos/ver-orcamentos-pausados',{nome, emailUser, tipoUsuario, orcamentosAberto: buscaTodosOrcametos});
};