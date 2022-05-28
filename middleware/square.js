'use strict';

//number
// const square = (num) => {
//     return(req, res, next) => {
//         if(typeof num == 'number') {
//             req.num = num * num;
//             next();
//         } else {
//             next(`${num} is not a number`)
//         }
        
//     }
// }

//number/:id
const square = (num) => {
    return(req, res, next) => {
        if(typeof num == 'number') {
            let z = req.params.id
            req.num = z * z;
            next();
        } else {
            next(`${num} is not a number`)
        }
        
    }
}
module.exports = square;
