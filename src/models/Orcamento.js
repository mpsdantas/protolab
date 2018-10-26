const mongoose  = require('mongoose');
const mongoose_csv = require('mongoose-csv');
const Schema = mongoose.Schema;

const Orcamento = new Schema({
    finalizado:{
        type: Boolean,
        default: false
    },
    pausado:{
        type: Boolean,
        default: false
    },
    valor: String,
    nome: String,
    email: String,
    telefone: String,
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
Orcamento.plugin(mongoose_csv);
mongoose.model('Orcamento', Orcamento);