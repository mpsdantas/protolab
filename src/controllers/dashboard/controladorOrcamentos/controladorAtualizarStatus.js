const mongoose = require('mongoose');
const Orcamento = mongoose.model('Orcamento');
const ObjectId = require('mongodb').ObjectID;

exports.realizarAtualizacaoStatusOrcamento = async (application, req, res) =>{
    if(req.body.status==="Despausar"){
        await Orcamento.update({_id: new ObjectId(req.body.id)},{$set:{pausado: false}});
        return res.status(200).json({success:true});
        return;
    }
    if(req.body.status==="Pausado"){
        await Orcamento.update({_id: new ObjectId(req.body.id)},{$set:{pausado: true}});
        return res.status(200).json({success:true});
        return;
    }
    if(req.body.status==="Concluído" || req.body.status==="Cancelado"){
        await Orcamento.update({_id: new ObjectId(req.body.id)},{$set:{finalizado: true, dataFechamento: new Date()}});
    }
    if(req.body.status==="Concluído"){
        await Orcamento.update({_id: new ObjectId(req.body.id)},{$set:{valor:req.body.valor}});
    }
    await Orcamento.update({_id: new ObjectId(req.body.id)},{$push:{
        processamento:{
            status: req.body.status,
            msg: req.body.msg,
            data: new Date()
        }
    }});
    return res.status(200).json({success:true});
};