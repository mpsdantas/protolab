const controladorEnvioProcesso = require('./controladorEnvioProcesso');
const controladorEnvioOrcamento = require('./controladorEnviarOrcamento');
module.exports = {
    ...controladorEnvioProcesso,
    ...controladorEnvioOrcamento
};