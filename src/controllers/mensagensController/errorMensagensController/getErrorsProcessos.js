exports.getErrosProcessos = (req) =>{
    req.assert('assunto', 'O assunto não pode ser vazio.').notEmpty();
    req.assert('codigo', 'O código não pode ser vazio').notEmpty();
    req.assert('mensagem', 'A mensagem não pode ser vazia.').notEmpty();
    delete req.body.nome;
    delete req.body.email;
    const erros = req.validationErrors();
    return erros;
};