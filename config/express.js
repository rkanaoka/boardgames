var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

//app.set('secret', 'homemavestruz'); 
//app.use(express.static('./public'));
app.use(express.static('./app-front'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

consign({cwd: 'app-back'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

module.exports = app;
