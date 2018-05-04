const getErrosFormDiscente = require('./getErrosFormDiscente');
const getErrosFormDocente = require('./getErrosFormDocente');
const getErrosFormServidor = require('./getErrosFormServidor');
const getErrosFormExterno = require('./getErrosFormExterno');
const getErrorsFile = require('./getErrorsFile');
module.exports = {
    ...getErrosFormDiscente,
    ...getErrosFormDocente,
    ...getErrosFormExterno,
    ...getErrosFormServidor,
    ...getErrorsFile
};