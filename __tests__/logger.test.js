'use strict';

const logger = require('../middleware/logger.js');

describe('testing logger middleware', () => {
    //before each test this function will called
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    afterEach(() => {
        consoleSpy.mockRestore()
    })

    it('test log', () => {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('test next', () => {
        logger(req, res, next);
        expect(next).toHaveBeenCalled();
    })
    
})