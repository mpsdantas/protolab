exports.getErrosRestoreSenha = (req) => {
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    req.assert('repetirSenha', 'Você deve repetir a sua senha.').notEmpty();
    req.assert('senha', 'As senhas não são iguais').equals(req.body.repetirSenha);
    req.assert('senha', 'A sua senha deve ter pelo menos 5 caracteres').isLength({ min: 5 });
    const erros = req.validationErrors();
    return erros;
};