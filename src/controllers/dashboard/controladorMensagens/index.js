const controllerViewMensagensDashboard = require('./controllerViewMensagensDashboard');
const controllerRespostaMensagem = require('./controllerRespostaMensagem');
module.exports = {
    ...controllerViewMensagensDashboard,
    ...controllerRespostaMensagem
};