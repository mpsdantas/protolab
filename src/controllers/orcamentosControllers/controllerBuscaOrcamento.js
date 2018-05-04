const mongoose = require('mongoose');
const Orcamento = mongoose.model('Orcamento');

exports.pesquisarOrcamento = async (application, req, res) => {
    const codigoOrcamento= req.params.id;
    const buscaOrcamento = await Orcamento.findOne({ codigo: codigoOrcamento });
    if (!buscaOrcamento) return res.status(200).json({ busca: false });
    return res.status(200).json({ busca: true, objetoBusca: buscaOrcamento });
};