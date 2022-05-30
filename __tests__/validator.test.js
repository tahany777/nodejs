const validator = require('../middleware/validator.js');


describe('testing validator middleware', ()=> {
    it('reject reqs without a name', ()=> {
        let req = {query:{}}
        let res = {};
        let next = jest.fn();
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith('Name is required')
    })
    it('allows reqs without a name', ()=> {
        let req = {query:{name: 'boby'}}
        let res = {};
        let next = jest.fn();
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith()
    })
})