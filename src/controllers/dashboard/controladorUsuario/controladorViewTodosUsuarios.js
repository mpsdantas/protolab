const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
exports.viewTodosUsuarios = async (application, req, res) => {
    const usuarios = await Usuario.find();
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/gerencia-usuarios/ver-usuarios',{nome, emailUser, tipoUsuario, usuarios});
};