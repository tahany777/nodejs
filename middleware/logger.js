'use strict';

const logger = (req, res, next) => {
    req.reqData = new Date().toLocaleDateString();
    console.log('logged @', req.reqData);
    next();
}

module.exports = logger