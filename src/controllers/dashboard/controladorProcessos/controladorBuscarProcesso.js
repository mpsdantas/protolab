const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const ObjectId = require('mongodb').ObjectID;
const matchSorter = require('match-sorter');

exports.buscarProcesso = async (application, req, res) =>{
    const buscaTodosProcessos = await Processo.find({});
    const processosSelecionados = matchSorter(buscaTodosProcessos, req.params.busca, {keys: ['emailSolicitante', 'codigo']});
    return res.status(200).json({processosSelecionados});
};

exports.viewBuscarProcessos = (application, req, res) => {
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/processos/buscar-processo',{nome, emailUser, tipoUsuario});
};