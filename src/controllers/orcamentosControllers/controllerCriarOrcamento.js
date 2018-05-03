exports.criarOrcamento = (application, req, res) => {
    // Declaração de variaveis.
    let code;
    let erros;

    //Controle de erros.
    console.log(req.body);
    console.log(req.files);
    return res.status(200).json({status:true})

};