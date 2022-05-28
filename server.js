'use strict';

const express = require("express");
const cors = require('cors');
const logger = require('./middleware/logger.js')
const getAgent = require('./middleware/getAgent.js');
const square = require('./middleware/square.js');
const errorHandler = require('./handler/500.js')
const app = express();


//1- Built-in Express middlewares

app.use(express.json());
app.use(cors())

//2- Application-Level/ Global custom middleware
app.use(logger);

//3- Route-Level Middleware
app.get('/test', getAgent,(req, res, next) => {
    res.json({
        message: 'test route',
        name: req.myName,
        type: req.reqType
    })
})

//Route-level configurable middleware
// app.get('/number', square(5), (req, res) => {
//     res.send(`number route ${req.num}`)
// })

app.get('/number/:id', square(6), (req, res) => {
    res.send(`number route ${req.num}`)
})


app.get('/throwing-error', square('hi'), (req, res) => {
    res.send(`number route ${req.num}`)
})
//route

app.get('/', (req, res) => {
    res.send('home route')
})

app.get('/data', (req, res) => {
    res.status(200).json({
        name: 'Tahani',
        email: 'ta@hotmail.comm'
    })
})

//it should be here after all route
app.use(errorHandler)

function start(port){
    app.listen(port,() => {
        console.log(`running on port ${port}`)
    })
}

module.exports = {
    app: app,
    start: start,
}
