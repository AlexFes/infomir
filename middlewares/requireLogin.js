module.exports = (req, res, next) => {
    if (!req.session.user || req.session.user.id !== req.params.userId) {
        return res.status(401).send({error: 'Доступ ограничен'});
    }

    next();
};