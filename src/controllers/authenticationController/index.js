const verificarUsuarioCadastro = require('./verificarUsuarioCadastro');
const criarUsuario = require('./criarUsuario');
const loginUsuario = require('./loginUsuario');
module.exports = {
    ...verificarUsuarioCadastro,
    ...criarUsuario,
    ...loginUsuario
};