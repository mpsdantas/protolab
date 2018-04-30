const path = require('path');
exports.getErrorsFile = (req) =>{
    if(!req.files){
        console.log('Entrou')
        return {statusErroFile:true,msg:`Você deve anexar algum arquivo`};
    }
    const sampleFile = req.files.arquivo;
    if(!(path.extname(sampleFile.name)==='.stl' || path.extname(sampleFile.name)==='.zip' || path.extname(sampleFile.name)==='.gbr')){
        return {statusErroFile:true,msg:`Você não pode enviar arquivos com a extensão ${path.extname(sampleFile.name)}`};
    }
    return {statusErroFile:false,msg:`Envio de arquivo autorizado.`};
};