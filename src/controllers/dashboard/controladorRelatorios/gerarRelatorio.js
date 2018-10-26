const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');
const Orcamento = mongoose.model('Orcamento');
exports.gerarRelatorio = async (req, res) =>{
    res.writeHead(200, {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=sample.csv'
    });
    console.log(req.body)
    if(req.body.radioValue=="processo"){
        const buscaProcesso = await Processo.find({
            $and:[{dataAbertura:{$gt:new Date(req.body.dataInicial)}},
            {dataFechamento:{$lt:new Date(req.body.dataFinal)}}]
        }).csv(res);
    }else{
        const buscaOrcamento = await Orcamento.find({
            $and:[{dataAbertura:{$gt:new Date(req.body.dataInicial)}},
            {dataFechamento:{$lt:new Date(req.body.dataFinal)}}]
        }).csv(res);
    }
    
    
    
}