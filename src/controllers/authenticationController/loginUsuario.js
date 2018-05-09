const crypto = require('crypto');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const errosUsuarioController = require('./errosUsuarioController');
exports.realizarLogin = async (application, req, res) => {
    const erros = errosUsuarioController.getErrosLogin(req);
    if(erros) return res.status(200).json({errosForm:true, erros: erros});
    req.body.senha = crypto.createHash("md5").update(req.body.senha).digest("hex");
    const buscaUsuario = await Usuario.findOne({email:req.body.email, senha:req.body.senha, ativado: true});
    if(!buscaUsuario) return res.status(200).json({status:false, msg: "Usuário ou senha inválidos."});
    req.session.status = true;
    req.session.email = buscaUsuario.email;
    req.session.nome  = buscaUsuario.nome;
    req.session.tipoUsuario = buscaUsuario.tipoUsuario;
    return res.status(200).json({status:true, msg: "Login realizado."});
};