const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const ObjectId = require('mongodb').ObjectID;
const path = require('path');
exports.enviarArquivo = async (application, req, res) =>{
    const findProcesso = await Processo.findOne({_id:new ObjectId(req.params.id)});
    if(!findProcesso) return res.send("Arquivo não encontrado");

    const arquivoProcesso = path.join(__dirname+'/../../../.'+findProcesso.urlArquivo);
    if(!arquivoProcesso) return res.send("Arquivo não encontrado");
    return res.download(arquivoProcesso);
}