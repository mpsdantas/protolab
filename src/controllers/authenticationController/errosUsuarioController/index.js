const getErrosUsuarios = require('./getErrosUsuarios');
const getErrosFile = require('./getErrosFile');
module.exports = {
    ...getErrosUsuarios,
    ...getErrosFile
};