exports.viewRealizarStatusOrcamento = (application, req, res) => {
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    let idOrcamento = req.params.id;
    res.render('dashboard/orcamentos/realizar-atualizacao-status',{nome, emailUser, tipoUsuario, idOrcamento});
};