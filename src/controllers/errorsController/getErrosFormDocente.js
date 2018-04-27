exports.getErrosFormDocente = (req) =>{
    req.assert('solicitante', 'O nome solicitante não pode ser vazio.').notEmpty();
    req.assert('emailSolicitante', 'O email não pode ser vazio.').notEmpty();
    req.assert('nomeProjeto', 'O nome do projeto não pode ser vazio.').notEmpty();
    req.assert('departamento', 'O departamento não pode ser vazio.').notEmpty();
    req.assert('tipoServico', 'O tipo de serviço não pode ser vazio').notEmpty();
    req.assert('quantidade', 'A quantidade não pode ser vazia').notEmpty();
    req.assert('quantidade', 'A quantidade tem que ser maior que zero.').isLength({min:1});
    req.assert('configPcb', 'A configuração da pcb não pode ser vazia.').notEmpty();
    req.assert('departamento', 'O departamento não pode ser vazio.').notEmpty();
    const erros = req.validationErrors();
    return erros;
};