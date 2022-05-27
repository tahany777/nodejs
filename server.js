'use strict';

const express = require("express");

const app = express();

function start(port){
    app.listen(port,() => {
        console.log(`running on port ${port}`)
    })
}

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
module.exports = {
    app: app,
    start: start,
}
