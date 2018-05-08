const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new Schema({
    nome: String,
    email: String,
    tipoUsuario: String,
    senha: String,
    urlFotoPerfil: String,
    ativado: {
        type: Boolean,
        default: false
    }
});

mongoose.model('Usuario', Usuario);