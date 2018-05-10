const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');

exports.buscarProcessoPausado = async (application, req, res) =>{
    const buscaTodosProcessos = await Processo.find({finalizado:false, pausado:true});
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/ver-processos-pausados',{nome, emailUser, tipoUsuario, processosAberto: buscaTodosProcessos});
};