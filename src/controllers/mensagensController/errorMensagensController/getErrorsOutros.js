exports.getErrosOutros = (req) =>{
    req.assert('nome', 'O nome não pode ser vazio.').notEmpty();
    req.assert('email', 'O email não pode ser vazio.').notEmpty();
    req.assert('assunto', 'O assunto não pode ser vazio.').notEmpty();
    req.assert('mensagem', 'A mensagem não pode ser vazia.').notEmpty();
    delete req.body.codigo;
    const erros = req.validationErrors();
    return erros;
};