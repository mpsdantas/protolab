const controladorPaginaInicial = require('./controladorPaginaInicial');
const controlardorSair = require('./controladorSair');
const controladorProcessos = require('./controladorProcessos');
module.exports = {
    ...controladorPaginaInicial,
    ...controlardorSair,
    ...controladorProcessos
}