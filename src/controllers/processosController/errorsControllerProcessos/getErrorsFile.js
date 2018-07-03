const mongoose = require('mongoose');
const Extensao = mongoose.model('Extensoes');
const path = require('path');
exports.getErrorsFile = async (req) =>{
    if(!req.files){
        return {statusErroFile:true,msg:`Você deve anexar algum arquivo`};
    }
    const sampleFile = req.files.arquivo;
    if(!sampleFile) return {statusErroFile:true,msg:`Arquivo inválido`};
    if(req.body.tipoServico === "impressao3d"){
        let extensoesValidas3D = await Extensao.find({tipo:'Impressão 3D'});
        let nenhumaExtensaoValida = false;
        for(let i=0; i<extensoesValidas3D.length; i++){
            if(extensoesValidas3D[i].ext==path.extname(sampleFile.name)){
                nenhumaExtensaoValida = true;
                break;
            } 
        }
        if(!nenhumaExtensaoValida) return {statusErroFile:true,msg:`No processo de impressão 3d você só pode enviar arquivos STL.`};
    }
    if(req.body.tipoServico === "impressaoPCB"){
        let extensoesValidasPCB = await Extensao.find({tipo:'PCB'});
        let nenhumaExtensaoValida = false;
        for(let i=0; i<extensoesValidasPCB.length; i++){
            if(extensoesValidasPCB[i].ext===path.extname(sampleFile.name)){
                nenhumaExtensaoValida = true;
                break; 
            } 
        }
        if(!nenhumaExtensaoValida) return {statusErroFile:true,msg:`No processo de impressão de PCB's você só pode enviar arquivos gerber ou zip.`};
    }
    /*
    if(!(path.extname(sampleFile.name)==='.stl' || path.extname(sampleFile.name)==='.STL' || path.extname(sampleFile.name)==='.brd' || path.extname(sampleFile.name)==='.BRD')){
        return {statusErroFile:true,msg:`Você não pode enviar arquivos com a extensão ${path.extname(sampleFile.name)}`};
    }
    */
    return {statusErroFile:false,msg:`Envio de arquivo autorizado.`};
};
exports.getExt = (file) => {
    return path.extname(sampleFile.name);
}