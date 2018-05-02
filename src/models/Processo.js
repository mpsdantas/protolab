const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const Processo = new Schema({
    finalizado:{
        type: Boolean,
        default: false
    },
    vinculo: String,
    solicitante: String,
    emailSolicitante: String,
    profResponsavel: String,
    emailProfResponsavel: String,
    nomeProjeto: String,
    departamento: String,
    tipoServico: String,
    quantidade: Number,
    configPcb: String,
    codigo: String,
    urlArquivo:String,
    processamento:[
        {
            status: String,
            msg: String,
            data: Date
        }
    ],
    dataAbertura: Date,
    dataFechamento: Date

});

mongoose.model('Processo', Processo);