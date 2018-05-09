exports.protectRoute = (req, res, next) => {
    if(!req.session.status){
        res.redirect('/');
        return;
    }
    return next();
}