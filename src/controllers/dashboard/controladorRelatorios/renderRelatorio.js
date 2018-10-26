exports.verScreenRelatorios = (req, res) =>{
    let nome = req.session.nome;
    let emailUser = req.session.email;
    let tipoUsuario = req.session.tipoUsuario;
    res.render('dashboard/relatorios/gerar-relatorio',{nome, emailUser, tipoUsuario});
}