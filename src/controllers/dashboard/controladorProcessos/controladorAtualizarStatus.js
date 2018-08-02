const env = require('dotenv');
const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const ObjectId = require('mongodb').ObjectID;
const nodemailer = require('nodemailer');
env.config({ path: '../../../variables.env' });
exports.realizarAtualizacaoStatus = async (application, req, res) => {
    const emailLab = process.env.EMAIL;
    const senhaLab = process.env.SENHA;
    const processoUsuario = await Processo.findOne({ _id: new ObjectId(req.body.id) });
    if (req.body.status === "Despausar") {
        await Processo.update({ _id: new ObjectId(req.body.id) }, { $set: { pausado: false } });
        return res.status(200).json({ success: true });
        return;
    }
    if (req.body.status === "Pausado") {
        await Processo.update({ _id: new ObjectId(req.body.id) }, { $set: { pausado: true } });
        return res.status(200).json({ success: true });
        return;
    }
    if (req.body.status === "Concluído" || req.body.status === "Cancelado") {
        await Processo.update({ _id: new ObjectId(req.body.id) }, { $set: { finalizado: true, dataFechamento: new Date() } });
    }
    await Processo.update({ _id: new ObjectId(req.body.id) }, {
        $push: {
            processamento: {
                status: req.body.status,
                msg: req.body.msg,
                data: new Date()
            }
        }
    });
    const mensagem = `O seu processo ${processoUsuario.codigo} teve uma atualização de status.`;
    const transporte = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: emailLab,
            pass: senhaLab
        }
    });
    const enviarEmail = {
        from: emailLab,
        to: processoUsuario.emailSolicitante, // Quem receberá
        subject: 'Atualização de processo',  // Um assunto bacana :-)
        html: mensagem // O conteúdo do e-mail
    };

    transporte.sendMail(enviarEmail, function (err, info) {
        if (err) throw err;
        return res.status(200).json({ success: true });
    });
    
};