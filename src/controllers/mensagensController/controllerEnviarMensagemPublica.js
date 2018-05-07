const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const Orcamento = mongoose.model('Orcamento');
const Mensagem = mongoose.model('Mensagens');
const errorMensagensController = require('./errorMensagensController');
exports.enviarMensagemPublica = async (application, req, res) => {
    let erros;
    if (req.body.assunto === "Outro") erros = errorMensagensController.getErrosOutros(req);
    else erros = errorMensagensController.getErrosProcessos(req);
    if (erros) return res.status(200).json({ errosForm: true, erros: erros });

    if (req.body.assunto !== "Outro") {
        let buscaOrcamento;
        
        if (req.body.assunto === "Orçamento") {
            buscaOrcamento = await Orcamento.findOne({ codigo: req.body.codigo });
        }

        const buscaProcesso = await Processo.findOne({ codigo: req.body.codigo, tipoServico: req.body.assunto });

        if (!buscaOrcamento && !buscaProcesso) return res.status(200).json({ erroCod: true, msg: "Nenhum orçamento ou processo foi encontrado para o código informado." });
    }
    req.body.enviadoPor = "Público";
    req.body.data = new Date();
    const novaMensagem = new Mensagem(req.body);
    await novaMensagem.save();
    return res.status(200).json({ status: true, msg: "Mensagem enviada com sucesso." });
};