const verificarUsuarioCadastro = require('./verificarUsuarioCadastro');
const criarUsuario = require('./criarUsuario');
const loginUsuario = require('./loginUsuario');
const recuperarSenha = require('./recuperarSenha');
module.exports = {
    ...verificarUsuarioCadastro,
    ...criarUsuario,
    ...loginUsuario,
    ...recuperarSenha
};