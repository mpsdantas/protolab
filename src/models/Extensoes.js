const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const Extensao = new Schema({
    tipo: String,
    ext: String
});

mongoose.model('Extensoes', Extensao);