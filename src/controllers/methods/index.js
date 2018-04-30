const files = require('./files');
const gerateCode = require('./gerateCode');
module.exports = {
    ...files,
    ...gerateCode
}