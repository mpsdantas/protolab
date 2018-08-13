const getErrosUsuarios = require('./getErrosUsuarios');
const getErrosFile = require('./getErrosFile');
const getErrosLogin = require('./getErrosLogin');
const getErrosRestoreSenha = require('./getErrosRestoreSenha');
const getErrosMudarSenha = require('./getErrosMudarSenha');
module.exports = {
    ...getErrosUsuarios,
    ...getErrosFile,
    ...getErrosLogin,
    ...getErrosRestoreSenha,
    ...getErrosMudarSenha
};