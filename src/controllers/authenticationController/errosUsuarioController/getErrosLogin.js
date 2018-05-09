exports.getErrosLogin = (req) =>{
    req.assert('email', 'O email não pode ser vazio.').notEmpty();
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    const erros = req.validationErrors();
    return erros;
};