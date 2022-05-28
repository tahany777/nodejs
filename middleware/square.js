'use strict';


const square = (num) => {
    return(req, res, next) => {
        if(typeof num == 'number') {
            req.num = num * num;
            next();
        } else {
            next(`${num} is not a number`)
        }
        
    }
}
module.exports = square;