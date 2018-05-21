const mongoose = require('mongoose');
const Mensagem = mongoose.model('Mensagens');
const ObjectId = require('mongodb').ObjectID;
exports.responderMensagem = async (application, req, res) => {
    const mensagemAnterior = await Mensagem.findOne({_id: new ObjectId(req.body.idMensagem)});
    if(req.body.mensagemResposta==="" || !req.body.mensagemResposta) return res.status(200).json({status:false,msg:"Insira uma mensagem."});
    if(mensagemAnterior.assunto!=='Outro'){
        const mensagem = {
            lido: true,
            nome: req.session.nome,
            email: req.session.email,
            assunto: mensagemAnterior.assunto,
            codigo: mensagemAnterior.codigo,
            mensagem: req.body.mensagemResposta,
            enviadoPor: req.session.nome,
            data: new Date()
        };
        const novaMensagem = new Mensagem(mensagem);
        await novaMensagem.save();
        return res.status(200).json({status:true,msg:"Mensagem enviada com sucesso."});
    }else{
        return res.status(200).json({status:false,msg:"No momento não podemos responder a categoria outros pois o servidor de SMTP não está configurado."});
    }

};