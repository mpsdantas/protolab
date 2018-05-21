const controladorVerOrcamento = require('./controladorVerOrcamento');
const controladorAtualizarStatus = require('./controladorAtualizarStatus');
const controladorViewStatusOrcamento = require('./controladorViewStatusOrcamento');
module.exports = {
    ...controladorVerOrcamento,
    ...controladorAtualizarStatus,
    ...controladorViewStatusOrcamento
};