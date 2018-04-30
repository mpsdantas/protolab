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
    processamento:[
        {
            status: String,
            msg: String,
            data: Date
        }
    ],
    dataAbertura: {
        type: Date,
        default: new Date()
    },
    dataFechamento: Date

});

mongoose.model('Processo', Processo);