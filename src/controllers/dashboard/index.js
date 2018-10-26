const controladorPaginaInicial = require('./controladorPaginaInicial');
const controlardorSair = require('./controladorSair');
const controladorProcessos = require('./controladorProcessos');
const controladorArquivos = require('./controladorArquivos');
const controladorUsuario = require('./controladorUsuario');
const controladorMensagem = require('./controladorMensagens');
const controladorOrcamentos = require('./controladorOrcamentos');
const controladorConfiguracoes = require('./controladorConfiguracoes');
const controladorRelatorio = require('./controladorRelatorios');
module.exports = {
    ...controladorPaginaInicial,
    ...controlardorSair,
    ...controladorProcessos,
    ...controladorArquivos,
    ...controladorUsuario,
    ...controladorMensagem,
    ...controladorOrcamentos,
    ...controladorConfiguracoes,
    ...controladorRelatorio
};