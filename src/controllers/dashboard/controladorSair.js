exports.sairDashboard = (application, req, res) => {
    req.session.destroy( err => {
        res.redirect('/login');
    });
};