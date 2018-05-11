exports.viewStatusProcesso = (application, req, res) => {
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/processos/atualizar-status-processo',{nome, emailUser, tipoUsuario});
};

exports.viewRealizarStatusProcesso = (application, req, res) => {
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    let idProcesso = req.params.id;
    res.render('dashboard/processos/realizar-atualizacao-status',{nome, emailUser, tipoUsuario, idProcesso});
};