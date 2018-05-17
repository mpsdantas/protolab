const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const Mensagem = new Schema({
    lido: {
        type: Boolean,
        default: false
    },
    nome: String,
    email: String,
    assunto: String,
    codigo: String,
    mensagem: String,
    enviadoPor: String,
    data: Date
});
mongoose.model('Mensagens', Mensagem);