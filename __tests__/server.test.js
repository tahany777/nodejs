'use strict';

const supertest = require('supertest');

const server = require('../server.js');

const request = supertest(server.app);

describe('Testing API server', ()=> {
    it('testing /',async ()=> {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('home route');
        
    })
    it('test /data',async ()=> {
        const response = await request.get('/data');
        expect(typeof response.body).toEqual('object');
    })
})