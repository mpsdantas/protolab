const controllerEnviarMensagemPublica = require('./controllerEnviarMensagemPublica');
const controllerGetMensagens = require('./controllerGetMensagens');
module.exports = {
    ...controllerEnviarMensagemPublica,
    ...controllerGetMensagens
};