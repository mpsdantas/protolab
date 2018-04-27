const path = require('path');
exports.getErrorsFile = (req) =>{
    const sampleFile = req.files.arquivo;
    if(sampleFile==undefined || path.extname(sampleFile.name)!=='.stl' || path.extname(sampleFile.name)!=='.zip' || path.extname(sampleFile.name)!=='.gbr'){
        return {statusErroFile:true,msg:`Você não pode enviar arquivos com a extensão ${path.extname(sampleFile.name)}`};
    }
};