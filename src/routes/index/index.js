const methods = require('../../controllers/methods');
module.exports = (application) => {
    application.get('/',  (req, res) => { 
        if(req.session.status) res.redirect('/dashboard');
        else res.render('public/index'); 
        
    });
    application.get('/get-img-perfil/:id', (req, res) => {methods.findImage(application, req, res)});
};
