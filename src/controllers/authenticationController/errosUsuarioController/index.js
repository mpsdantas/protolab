const getErrosUsuarios = require('./getErrosUsuarios');
const getErrosFile = require('./getErrosFile');
const getErrosLogin = require('./getErrosLogin');
module.exports = {
    ...getErrosUsuarios,
    ...getErrosFile,
    ...getErrosLogin
};