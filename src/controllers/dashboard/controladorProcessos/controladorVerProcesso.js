const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const ObjectId = require('mongodb').ObjectID;
exports.verProcesso = async (application, req, res) =>{
    const id = req.params.id;
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    const buscaProcesso = await Processo.findOne({_id: new ObjectId(id)});
    console.log(buscaProcesso)
    res.render('dashboard/ver-processo',{nome, emailUser, tipoUsuario,buscaProcesso});
};