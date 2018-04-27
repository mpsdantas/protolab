const getErrosFormDiscente = require('./getErrosFormDiscente');
const getErrosFormDocente = require('./getErrosFormDocente');
const getErrosFormServidor = require('./getErrosFormServidor');
const getErrosFormExterno = require('./getErrosFormExterno');
module.exports = {
    ...getErrosFormDiscente,
    ...getErrosFormDocente,
    ...getErrosFormExterno,
    ...getErrosFormServidor
};