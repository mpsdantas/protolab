const crypto = require('crypto');
const env = require('dotenv');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const nodemailer = require('nodemailer');
const errosUsuarioController = require('./errosUsuarioController');
env.config({ path: '../../../variables.env' });
exports.enviarRecuperarSenha = async (application, req, res) => {
    const emailLab = process.env.EMAIL;
    const senhaLab = process.env.SENHA;
    const erros = errosUsuarioController.getErrosRecuperarSenha(req)
    if (erros) return res.status(200).json({ errosForm: true, erros: erros });
    const findUser = await Usuario.findOne({ email: req.body.email });
    if (!findUser) return res.status(200).json({ errosRecover: true, msg: "O e-mail informado não está catalogado no sistema." });
    const token = crypto.createHash("md5").update(`${Math.random()}`).digest("hex");
    let serverUrl = req.protocol + '://' + req.get('host');
    const urlRecuperacao = `${serverUrl}/realizar-recuperacao?token=${token}`;
    const updateUser = await Usuario.update({ email: req.body.email }, { $set: { tokenRecuperacao: token } });
    const assunto = `Recuperação de senha`;
    const mensagem = `${findUser.nome}, <br> Como solicitado utilize o <a href="${urlRecuperacao}">link</a> para recuperar sua senha.`;
    const transporte = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: emailLab,
            pass: senhaLab
        }
    });
    const enviarEmail = {
        from: emailLab,
        to: req.body.email, // Quem receberá
        subject: assunto,  // Um assunto bacana :-)
        html: mensagem // O conteúdo do e-mail
    };
    transporte.sendMail(enviarEmail, function (err, info) {
        if (err) throw err;
        return res.status(200).json({ url: urlRecuperacao });
    });  
};
exports.mudarSenha = async (application, req, res) =>{
    const findUser = await Usuario.findOne({ tokenRecuperacao: req.body.token });
    if(!findUser) return res.status(200).json({status:false, msg:'Token inválido.'});
    const erros = errosUsuarioController.getErrosRestoreSenha(req);
    if (erros) return res.status(200).json({ errosForm: true, erros: erros });
    req.body.senha = crypto.createHash("md5").update(req.body.senha).digest("hex");
    await Usuario.update({ email: findUser.email }, { $set: { senha:req.body.senha, token:''}});
    return res.status(200).json({status:true, msg:"Senha alterada com sucesso!"});
}