const controllerCriarProcesso = require('./controllerCriarProcesso');
const controllerBuscaProcesso = require('./controllerBuscaProcesso');
const controllerRenderCriarProcesso = require('./controllerRenderCriarProcesso');
module.exports = {
    ...controllerCriarProcesso,
    ...controllerBuscaProcesso,
    ...controllerRenderCriarProcesso
};