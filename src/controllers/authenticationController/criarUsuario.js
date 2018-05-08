const crypto = require('crypto');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const errosUsuarioController = require('./errosUsuarioController');
const methods = require('../methods');
exports.criarNovoUsuario = async (application, req, res) => {
    const erros = errosUsuarioController.getErrosUsuarios(req);
    if (erros) return res.status(200).json({ errosForm: true, erros: erros });
    const errosFile = errosUsuarioController.getErrorsFile(req);
    if (errosFile.statusErroFile) return res.status(200).json({ errosFile: true, erros: errosFile });
    req.body.senha = crypto.createHash("md5").update(req.body.senha).digest("hex");
    req.body.ativado = true;
    delete req.body.repetirSenha;
    
    if(errosFile.semFoto){
        req.body.urlFotoPerfil = `./src/uploads/usuarios/img-perfil/default.png`;
        const novoUsuario = new Usuario(req.body);
        await novoUsuario.save();
        req.session.status = true;
        req.session.email = req.body.email;
        req.session.nome  = req.body.nome;
        req.session.tipoUsuario = req.body.tipoUsuario; 
        return res.status(200).json({status:true, msg: "Usuario criado."});
    }

    const usuario = await Usuario.findOne({email:req.body.email});
    req.body.urlFotoPerfil = `./src/uploads/usuarios/img-perfil/${usuario._id}/${usuario._id}${methods.getExt(req.files.arquivo)}`;
    /* Movendo arquivo enviado para a pasta dos processos. */
    methods.createDir(`./src/uploads/usuarios/img-perfil/${usuario.id}`, (statusDir, erroDir) => {
        if (erroDir) return res.status(500).json({ msg: "Problema ao criar diretorio, tente novamente." });
        methods.salveFile(req.files.arquivo, req.body.urlFotoPerfil, (statusFile, erroFile) => {
            if (erroFile) return res.status(500).json({ msg: "Problema ao criar arquivo, tente novamente." });
            /* Salvando dados no banco */
            Usuario.update({email:req.body.email},{$set:{nome:req.body.nome, tipoUsuario: req.body.tipoUsuario, senha: req.body.senha, urlFotoPerfil: req.body.urlFotoPerfil, ativado: true}},(err, data)=>{
                if (err) return res.status(200).json({ status: false, msg: erro });
                req.session.status = true;
                req.session.email = req.body.email;
                req.session.nome  = req.body.nome;
                req.session.tipoUsuario = req.body.tipoUsuario;
                return res.status(200).json({status:true, msg: "Usuario criado."});
            });
        });
    });

};