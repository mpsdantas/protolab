const getErrosUsuarios = require('./getErrosUsuarios');
const getErrosFile = require('./getErrosFile');
const getErrosLogin = require('./getErrosLogin');
const getErrosRecuperarSenha = require('./getErrosRecuperarSenha');
module.exports = {
    ...getErrosUsuarios,
    ...getErrosFile,
    ...getErrosLogin,
    ...getErrosRecuperarSenha
};