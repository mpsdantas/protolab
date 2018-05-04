const controllerCriarOrcamento = require('./controllerCriarOrcamento');
const controllerBuscaOrcamento = require('./controllerBuscaOrcamento');
module.exports = {
    ...controllerCriarOrcamento,
    ...controllerBuscaOrcamento
}