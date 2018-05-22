const controladorVerOrcamento = require('./controladorVerOrcamento');
const controladorAtualizarStatus = require('./controladorAtualizarStatus');
const controladorViewStatusOrcamento = require('./controladorViewStatusOrcamento');
const controladorBuscarOrcamentos = require('./controladorBuscarOrcamentos');
const controladorBuscarOrcamentosPausados = require('./controladorVerOrcamentosPausados');
module.exports = {
    ...controladorVerOrcamento,
    ...controladorAtualizarStatus,
    ...controladorViewStatusOrcamento,
    ...controladorBuscarOrcamentos,
    ...controladorBuscarOrcamentosPausados
};