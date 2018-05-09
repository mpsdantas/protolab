const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const Processo = mongoose.model('Processo');
const Orcamento = mongoose.model('Orcamento');
exports.renderIndex = async (application, req, res) =>{
    let emailUser = req.session.email;
    let nome = req.session.nome;
    let tipoUsuario = req.session.tipoUsuario;
    // Buscas banco de dados:
    const totalProcessos = await Processo.count({});
    let processosAberto = await Processo.find({finalizado:false});
    const totalOrcamento = await Orcamento.count({});
    const orcamentosAberto = await Orcamento.find({finalizado:false});
    
    let tamProcessosAberto = processosAberto.length;
    let tamOrcamentosAberto = orcamentosAberto.length;
    let totalImpressao3d = 0;
    let totalPcb = 0;
    processosAberto = await Processo.find({finalizado:false,pausado:false});
    for(let i=0; i<processosAberto.length; i++){
        if(processosAberto[i].tipoServico==="impressao3d") totalImpressao3d++;
        else totalPcb++;
    }
    res.render('dashboard/index',{emailUser, nome, tipoUsuario, totalProcessos, totalOrcamento, tamProcessosAberto, tamOrcamentosAberto, totalImpressao3d, totalPcb, processosAberto}); 
};