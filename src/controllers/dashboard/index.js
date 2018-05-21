const controladorPaginaInicial = require('./controladorPaginaInicial');
const controlardorSair = require('./controladorSair');
const controladorProcessos = require('./controladorProcessos');
const controladorArquivos = require('./controladorArquivos');
const controladorUsuario = require('./controladorUsuario');
const controladorMensagem = require('./controladorMensagens');
const controladorOrcamentos = require('./controladorOrcamentos');
module.exports = {
    ...controladorPaginaInicial,
    ...controlardorSair,
    ...controladorProcessos,
    ...controladorArquivos,
    ...controladorUsuario,
    ...controladorMensagem,
    ...controladorOrcamentos
};