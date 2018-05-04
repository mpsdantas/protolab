const controllerCriarProcesso = require('./controllerCriarProcesso');
const controllerBuscaProcesso = require('./controllerBuscaProcesso');
module.exports = {
    ...controllerCriarProcesso,
    ...controllerBuscaProcesso
};