const mongoose = require('mongoose');
const Extensoes = mongoose.model('Extensoes');

exports.renderCriarProcesso = async (req, res) => {
    const extensoes = await Extensoes.find({});
    let stringPCB = '';
    let string3D = '';
    for(let i = 0; i<extensoes.length; i++){
        if(extensoes[i].tipo=='PCB'){
            stringPCB += extensoes[i].ext + ' ';
        }else{
            string3D += extensoes[i].ext + ' ';
        }
    }
    return res.render('public/novo-processo', {string3D, stringPCB});
}