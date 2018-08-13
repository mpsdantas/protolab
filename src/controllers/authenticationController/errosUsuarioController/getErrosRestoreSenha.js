exports.getErrosRecuperarSenha = (req) =>{
    req.assert('email', 'O email não pode ser vazio.').notEmpty();
    const erros = req.validationErrors();
    return erros;
};