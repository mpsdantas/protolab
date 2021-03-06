const env = require('dotenv');
const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const errorsController = require('./errorsControllerProcessos');
const methods = require('../methods');
const nodemailer = require('nodemailer');
env.config({ path: '../../../variables.env' });
exports.criarProcesso = async (req, res) => {
    const emailLab = process.env.EMAIL;
    const senhaLab = process.env.SENHA;

    // Declaração de variaveis.
    let code;
    let erros;

    /* Controle de erros */
    if (req.body.vinculo === "Discente") erros = errorsController.getErrosFormDiscente(req);
    else if (req.body.vinculo === "Docente") erros = errorsController.getErrosFormDocente(req);
    else if (req.body.vinculo === "Servidor") erros = errorsController.getErrosFormServidor(req);
    else erros = errorsController.getErrosFormExterno(req);

    if (erros) return res.status(200).json({ erroForm: true, erros: erros });

    const erroFiles = await errorsController.getErrorsFile(req);
    if (erroFiles.statusErroFile) return res.status(200).json(erroFiles);

    if (req.body.tipoServico === "impressao3d") {
        code = "3D";
        delete req.body.configPcb;
    } else if (req.body.tipoServico === "impressaoPCB") {
        code = "PCB";
    } else {
        return res.status(200).json({ erroServico: true, msg: "Você precisa selecionar um serviço" });
    }
    
    /* Atualizando variaveis remanecentes para salvar no banco. */
    req.body.dataAbertura = new Date();
    req.body.codigo = methods.start(code);
    req.body.processamento = [
        {
            status: "Enviado",
            msg: `O seu processo de codigo ${req.body.codigo} foi enviado.`,
            data: new Date()
        }
    ];
    /*req.body.urlArquivo = `./src/uploads/processos/${req.body.codigo}/${req.body.codigo}${methods.getExt(req.files.arquivo)}`;*/
    req.body.urlArquivo = `./src/uploads/processos/${req.body.codigo}/${req.files.arquivo.name}`;

    /* Movendo arquivo enviado para a pasta dos processos. */
    methods.createDir(`./src/uploads/processos/${req.body.codigo}`, (statusDir, erroDir) => {
        if (erroDir) return res.status(500).json({ msg: "Problema ao criar diretorio, tente novamente." });
        methods.salveFile(req.files.arquivo, req.body.urlArquivo, (statusFile, erroFile) => {
            if (erroFile) return res.status(500).json({ msg: "Problema ao criar arquivo, tente novamente." });
            /* Salvando dados no banco */
            const novoProcesso = new Processo(req.body);
            novoProcesso.save((err, data) => {
                if (err) return res.status(200).json({ status: false, msg: erro });
                const assunto = `Abertura de processo ${req.body.codigo} no protolab`;
                const mensagem = `<p>${req.body.solicitante} você abriu um processo no protolab, para ver o andamento dele use o seguinte código na aba de buscas: ${req.body.codigo}</p>`;
                const transporte = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: emailLab,
                            pass: senhaLab
                        }
                });
                const enviarEmail = {
                    from: emailLab,
                    to: req.body.emailSolicitante, // Quem receberá
                    subject: assunto,  // Um assunto bacana :-)
                    html: mensagem // O conteúdo do e-mail
                };
            
                transporte.sendMail(enviarEmail, function (err, info) {
                    if (err) throw err;
                    return res.status(200).json({ status: true, codigo: req.body.codigo, email: req.body.emailSolicitante });
                });
                
            });
        });
    });
};