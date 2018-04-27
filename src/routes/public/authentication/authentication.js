module.exports = (application) => {
    application.get('/login', (req, res) => { res.render('public/login') });
}
