const mongoose = require('mongoose');
const Orcamento = mongoose.model('Orcamento');
const ObjectId = require('mongodb').ObjectID;
const matchSorter = require('match-sorter');

exports.buscarOrcamento = async (application, req, res) =>{
    const buscaTodosOrcamento = await Orcamento.find({});
    const orcamentosSelecionados = matchSorter(buscaTodosOrcamento, req.params.busca, {keys: ['email', 'codigo']});
    return res.status(200).json({orcamentosSelecionados});
};

exports.viewBuscarOrcamentos = (application, req, res) => {
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/orcamentos/buscar-orcamento',{nome, emailUser, tipoUsuario});
};

exports.viewTodosOsOrcamentos = async (application, req, res) => {
    const todosOrcamentos = await Orcamento.find({});
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/orcamentos/todos-orcamentos',{nome, emailUser, tipoUsuario, todosOrcamentos});
};
exports.buscarOrcamentosData = async (application, req, res) => {
    let dataInicial = new Date(req.params.dataInicial);
    let dataFinal = new Date(req.params.dataFinal);
    const buscaOrcamentos = await Orcamento.find({"dataAbertura":{$gt: dataInicial, $lt: dataFinal}});
    return res.status(200).json(buscaOrcamentos);
};