exports.getErrosLogin = (req) =>{
    req.assert('email', 'O email não pode ser vazio.').notEmpty();
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    //req.assert('senha', 'A sua senha deve ter pelo menos 5 caracteres').isLength({ min: 5 });
    const erros = req.validationErrors();
    return erros;
};