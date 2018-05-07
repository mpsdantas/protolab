const getErrorsOutros = require('./getErrorsOutros');
const getErrorsProcessos = require('./getErrorsProcessos');
module.exports = {
    ...getErrorsOutros,
    ...getErrorsProcessos
};