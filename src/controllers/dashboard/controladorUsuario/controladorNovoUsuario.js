const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const controladorErros = require('./controladorErros');
exports.novoUsuario = async (application, req, res) =>{
    const erros = controladorErros.getErrosLogin(req);
    if(erros) return res.status(200).json({erro:true, msg: "O e-mail não pode ser vazio."});
    const findUser = await Usuario.findOne({email:req.body.email});
    if(findUser) return res.status(200).json({erro:true, msg: "Já existe um usuário cadastrado com esse e-mail."});
    const novoUsuario = new Usuario({email:req.body.email, ativado:false});
    await novoUsuario.save();
    return res.status(200).json({status:true, msg: "Usuário adicionado com sucesso."});
};