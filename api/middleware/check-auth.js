const jwt = require('jsonwebtoken');
const appRoot = require('app-root-path');
const env = process.env.NODE_ENV || 'development';
const config = require(appRoot + '/config/wannacry/conf.json')[env];

module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.token, config);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed!'
        })
    }
}