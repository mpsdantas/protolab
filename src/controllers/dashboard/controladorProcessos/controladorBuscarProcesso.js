const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const Orcamento = mongoose.model('Orcamento');
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

exports.viewTodosOsProcessos = async (application, req, res) => {
    const todosProcessos = await Processo.find({});
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/processos/todos-processos',{nome, emailUser, tipoUsuario, todosProcessos});
};

exports.buscarProcessoEdicao = async (application, req, res) => {
    const buscaProcesso = await Processo.findOne({_id: new ObjectId(req.params.idProcesso)});
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/processos/editar-processo',{nome, emailUser, tipoUsuario, buscaProcesso});
    //res.status(200).json(processoEdicao)
};

exports.buscarProcessoData = async (application, req, res) => {
    let dataInicial = new Date(req.params.dataInicial);
    let dataFinal = new Date(req.params.dataFinal);
    const buscaProcessos = await Processo.find({"dataAbertura":{$gt: dataInicial, $lt: dataFinal}});
    return res.status(200).json(buscaProcessos);
};
