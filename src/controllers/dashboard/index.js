const controladorPaginaInicial = require('./controladorPaginaInicial');
const controlardorSair = require('./controladorSair');
const controladorProcessos = require('./controladorProcessos');
const controladorArquivos = require('./controladorArquivos');
module.exports = {
    ...controladorPaginaInicial,
    ...controlardorSair,
    ...controladorProcessos,
    ...controladorArquivos
}