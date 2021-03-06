exports.getErrosUsuarios = (req) =>{
    req.assert('nome', 'O nome não pode ser vazio.').notEmpty();
    req.assert('email', 'O email não pode ser vazio.').notEmpty();
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    req.assert('tipoUsuario', 'O tipo de usuário não pode ser vazio').notEmpty();
    req.assert('repetirSenha', 'A mensagem não pode ser vazia.').notEmpty();
    req.assert('senha', 'As senhas não são iguais').equals(req.body.repetirSenha);
    req.assert('senha', 'A sua senha deve ter pelo menos 5 caracteres').isLength({ min: 5 });
    const erros = req.validationErrors();
    return erros;
};