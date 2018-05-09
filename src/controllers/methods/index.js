const files = require('./files');
const gerateCode = require('./gerateCode');
const imgPerfil = require('./imgPerfil');
const protectRouter = require('./protectRouter');
module.exports = {
    ...files,
    ...gerateCode,
    ...imgPerfil,
    ...protectRouter
}