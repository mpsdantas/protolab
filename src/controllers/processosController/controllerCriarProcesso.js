const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const errorsController = require('../errorsController');
const gerateCode = require('../methods/gerateCode');

exports.criarProcesso = (req, res) => {
    let code = "";

    if (req.body.vinculo === "Discente") erros = errorsController.getErrosFormDiscente(req);
    else if (req.body.vinculo === "Docente") erros = errorsController.getErrosFormDocente(req);
    else if (req.body.vinculo === "Servidor") erros = errorsController.getErrosFormServidor(req);
    else erros = errorsController.getErrosFormExterno(req);

    if (erros) return res.status(200).json({ erroForm: true, erros: erros });

    const erroFiles = errorsController.getErrorsFile(req);
    if (erroFiles.statusErroFile) return res.status(200).json(erroFiles);

    if (req.body.tipoServico === "impressao3d") code = "3D";
    else if (req.body.tipoServico === "impressaoPCB") code = "PCB";
    else return res.status(200).json({ erroServico: true, msg: "Você precisa selecionar um serviço" });
    
    req.body.codigo = gerateCode.start(code);
    req.body.processamento = [
        {
            status: "Enviado",
            msg: `O seu processo de codigo ${req.body.codigo} foi enviado.`,
            data: new Date()
        }
    ];
    console.log(req.body);
    res.status(200).json({ status: "ok" });
    //console.log(__dirname + "/../../")
};