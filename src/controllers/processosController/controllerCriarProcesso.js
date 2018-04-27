const errorsController = require('../errorsController');
exports.criarProcesso = (req, res) => {
    console.log(req.files);
    let erros;

    if (req.body.vinculo === "Discente") erros = errorsController.getErrosFormDiscente(req); 
    else if (req.body.vinculo === "Docente") erros = errorsController.getErrosFormDocente(req);
    else if (req.body.vinculo === "Servidor") erros = errorsController.getErrosFormServidor(req);
    else erros = errorsController.getErrosFormExterno(req);

    if (erros) return res.status(200).json({ erroForm: true, erros: erros });
    const erroFiles = errorsController.getErrorsFile(req);
    if(erroFiles.statusErroFile) return res.status(200).json(erroFiles);
    res.status(200).json({ status: "ok" });
};