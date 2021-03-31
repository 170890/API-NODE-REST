const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser'); //biblioyteca necessária para realizar a leitura do body da requisição

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign()
        .include('controllers')
        .into(app)

    return app
}
