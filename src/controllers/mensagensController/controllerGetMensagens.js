const mongoose = require('mongoose');
const Mensagem = mongoose.model('Mensagens');
exports.buscarMensagens = async (application, req, res) => {
    const codigo = req.params.codigo;
    const mensagens = await Mensagem.find({codigo: codigo});
    return res.status(200).json({busca:true,mensagens: mensagens});
};