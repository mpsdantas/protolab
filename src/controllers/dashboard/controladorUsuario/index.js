const controladorNovoUsuario = require('./controladorNovoUsuario');
const controladorViewNovoUsuario = require('./controladorViewNovoUsuario');
const controladorViewTodosNovoUsuarios = require('./controladorViewTodosUsuarios');
module.exports = {
    ...controladorNovoUsuario,
    ...controladorViewNovoUsuario,
    ...controladorViewTodosNovoUsuarios
};