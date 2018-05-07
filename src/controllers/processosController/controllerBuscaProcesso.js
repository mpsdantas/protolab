const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');

exports.pesquisarProcesso = async (application, req, res) => {
    const codigoProcesso = req.params.id;
    const buscaProcesso = await Processo.findOne({ codigo: codigoProcesso });
    if (!buscaProcesso) return res.status(200).json({ busca: false });
    return res.status(200).json({ busca: true, objetoBusca: buscaProcesso});
};