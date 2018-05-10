const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const ObjectId = require('mongodb').ObjectID;
const matchSorter = require('match-sorter');

exports.buscarProcesso = async (application, req, res) =>{
    const buscaTodosProcessos = await Processo.find({});
    const processosSelecionados = matchSorter(buscaTodosProcessos, req.params.busca, {keys: ['email', 'codigo']});
    return res.status(200).json({processosSelecionados});
};