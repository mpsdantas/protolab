exports.verificarErrosForm = (application, req, res) => {
    if( req.body.tipoProcesso === "nenhum") delete req.body.tipoProcesso;
    req.assert('nome', 'O nome não pode ser vazio.').notEmpty();
    req.assert('email', 'O email não pode ser vazio.').notEmpty();
    req.assert('telefone', 'O telefone não pode ser vazio.').notEmpty();
    req.assert('tipoServico', 'O tipo do processo não pode ser vazio.').notEmpty();
    req.assert('configPcb', 'A configuração da pcb não pode ser vazia.').notEmpty();
    req.assert('quantidade', 'A quantidade não pode ser vazia').notEmpty();
    const erros = req.validationErrors();
    return erros;
}