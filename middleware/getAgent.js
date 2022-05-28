'use strict';

module.exports = (req, res, next) => {
    req.myName = 'Tahani';
    req.reqType = req.method;
    next();
}