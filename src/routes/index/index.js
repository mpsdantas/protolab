module.exports = (application) => {
    application.get('/', (req, res) => { res.render('public/index') });
}
