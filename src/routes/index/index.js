const path = require('path');
module.exports = (application) => {
    application.get('/', (req, res) => { res.render('public/index') });
    application.get('/hora', (req, res) => {
        let data = new Date();
        res.send(data.toLocaleString());
    });
    application.get('/dashboard', (req, res) => {
        res.render('dashboard/index')
    });
    application.get('/get-img-perfil/:id', (req, res) => {
        const arquivo = path.join(__dirname+'/../../uploads/images.png');
        res.sendFile(arquivo)
    });
}
