'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const port = '3000';

app.use(express.json());
app.use(cors());

function start(){
    app.listen(port,() => {
        console.log(`running on port ${port}`)
    })
}

module.exports = { 
    start: start, 
    app: app
}