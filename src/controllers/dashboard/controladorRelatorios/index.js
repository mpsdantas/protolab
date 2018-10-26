const renderRelatorio = require('./renderRelatorio');
const gerarRelatorio = require('./gerarRelatorio');
module.exports = {
    ...renderRelatorio,
    ...gerarRelatorio
}