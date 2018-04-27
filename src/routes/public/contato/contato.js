module.exports = (application) => {
    application.get('/contato', (req, res) => { res.render('public/contato') });
}
