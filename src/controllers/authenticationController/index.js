const verificarUsuarioCadastro = require('./verificarUsuarioCadastro');
const criarUsuario = require('./criarUsuario');
module.exports = {
    ...verificarUsuarioCadastro,
    ...criarUsuario
};