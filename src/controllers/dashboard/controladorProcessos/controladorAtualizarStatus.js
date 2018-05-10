const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const ObjectId = require('mongodb').ObjectID;

exports.realizarAtualizacaoStatus = async (application, req, res) =>{
    if(req.body.status==="Despausar"){
        await Processo.update({_id: new ObjectId(req.body.id)},{$set:{pausado: false}});
        return res.status(200).json({success:true});
        return;
    }
    if(req.body.status==="Pausado"){
        await Processo.update({_id: new ObjectId(req.body.id)},{$set:{pausado: true}});
        return res.status(200).json({success:true});
        return;
    }
    if(req.body.status==="Concluído" || req.body.status==="Cancelado"){
        await Processo.update({_id: new ObjectId(req.body.id)},{$set:{finalizado: true}});
    }
    await Processo.update({_id: new ObjectId(req.body.id)},{$push:{
        processamento:{
            status: req.body.status,
            msg: req.body.msg,
            data: new Date()
        }
    }});
    return res.status(200).json({success:true});
};