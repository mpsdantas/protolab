const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const path = require('path');
exports.findImage = async (application, req, res) =>{
    const arquivoDefault = path.join(__dirname+'/../../.'+'./src/uploads/usuarios/img-perfil/default.png');
    const findUser = await Usuario.findOne({email:req.params.id});
    if(!findUser) return res.sendFile(arquivoDefault);
    const arquivoImg = path.join(__dirname+'/../../.'+findUser.urlFotoPerfil);
    return res.sendFile(arquivoImg);
}