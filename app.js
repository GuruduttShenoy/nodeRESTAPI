const express = require('express')
const bodyParser = require('body-parser')

const app = express()

async function init() {
    app.use(bodyParser.json({limit:'50mb'}));
    app.use(bodyParser.urlencoded({limit:'50mb', extended: true, parameterLimit:50000}));

    const approuting = require('./modules')
    const appmodules = new approuting(app)

    appmodules.init()
}

init();

module.exports = app