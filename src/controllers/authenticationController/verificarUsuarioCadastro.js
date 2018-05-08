const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
exports.verificarUsuario = async (application, req, res) => {
    let buscaUsuario = await Usuario.findOne({email:req.body.email});
    if(!buscaUsuario) return res.status(200).json({success:false});
    else if(!buscaUsuario.ativado) return res.status(200).json({success:true});
    return res.status(200).json({success:false});
};