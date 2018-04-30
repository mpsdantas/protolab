const mkdirp = require('mkdirp');
const path = require('path');

exports.salveFile = (file="Nenhum arquivo",urlArquivo="./src/processos",cb) => {
    if(file==="Nenhum arquivo") return false;
    file.mv(urlArquivo, err => {
        if (err) cb(status=false,erro=true);
        else cb(status=true,erro=false);
    }); 
};

exports.createDir = (url, cb) => {
    mkdirp(url, err => {
        if (err) cb(status=false, err=true);
        else cb(status=true, err=false);
    });  
};

exports.getExt = (file) => {
    return path.extname(file.name);
};