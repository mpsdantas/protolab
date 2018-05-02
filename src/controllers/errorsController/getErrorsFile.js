const path = require('path');
exports.getErrorsFile = (req) =>{
    if(!req.files){
        return {statusErroFile:true,msg:`Você deve anexar algum arquivo`};
    }
    const sampleFile = req.files.arquivo;
    if(req.body.tipoServico === "impressao3d"){
        if(!(path.extname(sampleFile.name)==='.stl')) return {statusErroFile:true,msg:`No processo de impressão 3d você só pode enviar exclusivamente arquivos STL.`};
    }
    if(!(path.extname(sampleFile.name)==='.stl' || path.extname(sampleFile.name)==='.zip' || path.extname(sampleFile.name)==='.gbr')){
        return {statusErroFile:true,msg:`Você não pode enviar arquivos com a extensão ${path.extname(sampleFile.name)}`};
    }
    return {statusErroFile:false,msg:`Envio de arquivo autorizado.`};
};
exports.getExt = (file) => {
    return path.extname(sampleFile.name);
}