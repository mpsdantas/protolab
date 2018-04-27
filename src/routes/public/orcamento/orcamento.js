module.exports = (application) => {
    application.get('/novo-orcamento', (req, res) => { res.render('public/novo-orcamento') });
}
