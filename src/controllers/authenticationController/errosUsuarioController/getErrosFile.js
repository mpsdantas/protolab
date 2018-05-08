const path = require('path');
exports.getErrorsFile = (req) =>{
    if(req.files){
        const sampleFile = req.files.arquivo;
        if(path.extname(sampleFile.name)==='.peg') sampleFile.name = sampleFile.name.replace(".peg", ".jpeg"); 
        if(!(path.extname(sampleFile.name)==='.png' || path.extname(sampleFile.name)==='.jpg' || path.extname(sampleFile.name)==='.jpeg')){
            return {statusErroFile:true,msg:`Você não pode enviar arquivos com a extensão ${path.extname(sampleFile.name)}`};
        }
        return {statusErroFile:false,msg:`Envio de arquivo autorizado.`};
    }
    
    return {semFoto:true}
    
};