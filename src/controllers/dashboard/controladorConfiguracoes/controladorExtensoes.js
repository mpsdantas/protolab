const mongoose = require('mongoose');
const Extensao = mongoose.model('Extensoes');
const ObjectId = require('mongodb').ObjectID;
exports.adicionarNovaExtensao = async (application, req, res) => {
    if (req.body.ext === "") {
        return res.status(200).json({ status: false, msg: "Escreva alguma extensão." });
    }
    const novaExtensao = new Extensao(req.body);
    await novaExtensao.save();
    return res.status(200).json({ status: true, msg: "Extensão adicionada" });
};

exports.renderExtensoes = async (application, req, res) => {
    const extensoes = await Extensao.find();
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/configuracoes/extensoes', { nome, emailUser, tipoUsuario, extensoes});
}
exports.deleteExtensao = async (application, req, res) => {
    await Extensao.deleteOne({_id: new ObjectId(req.body.idArquivo)});
    return res.status(200).json({ status: true, msg: "Extensão deletada" });
}