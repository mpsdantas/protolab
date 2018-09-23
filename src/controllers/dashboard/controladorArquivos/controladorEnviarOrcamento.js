const mongoose = require('mongoose');
const Orcamento = mongoose.model('Orcamento');
const ObjectId = require('mongodb').ObjectID;
const path = require('path');
exports.enviarOrcamento = async (application, req, res) =>{
    const findOrcamento = await Orcamento.findOne({_id:new ObjectId(req.params.id)});
    if(!findOrcamento) return res.send("Arquivo não encontrado");

    const arquivoProcesso = path.join(__dirname+'/../../../.'+findOrcamento.urlArquivo);
    if(!arquivoProcesso) return res.send("Arquivo não encontrado");
    return res.download(arquivoProcesso);
}