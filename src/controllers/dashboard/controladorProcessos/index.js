const controladorVerProcesso = require('./controladorVerProcesso');
const controladorBuscarProcesso = require('./controladorBuscarProcesso');
const controladorViewStatusProcesso = require('./controladorViewStatusProcesso');
const controladorAtualizarStatus = require('./controladorAtualizarStatus');
const controladorVerProcessosPausados = require('./controladorVerProcessosPausados');
module.exports = {
    ...controladorVerProcesso,
    ...controladorBuscarProcesso,
    ...controladorViewStatusProcesso,
    ...controladorAtualizarStatus,
    ...controladorVerProcessosPausados
}