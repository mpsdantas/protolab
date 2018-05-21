const mongoose = require('mongoose');
const Orcamento = mongoose.model('Orcamento');
const ObjectId = require('mongodb').ObjectID;
exports.verOrcamento = async (application, req, res) =>{
    const id = req.params.id;
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    const buscaOrcamento = await Orcamento.findOne({_id: new ObjectId(id)});
    if(buscaOrcamento.processamento.length===1){
        await Orcamento.update({_id: new ObjectId(id)},{$push:{
            processamento:{
                status: "Visualizado",
                msg: "Seu orçamento foi visualizado.",
                data: new Date()
            }
        }});
    }
    res.render('dashboard/orcamentos/ver-orcamento',{nome, emailUser, tipoUsuario,orcamento:buscaOrcamento});
};