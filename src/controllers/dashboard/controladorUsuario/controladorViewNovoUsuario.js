exports.viewNovoUsuario = (application, req, res) => {
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/gerencia-usuarios/novo-usuario',{nome, emailUser, tipoUsuario});
};