'use strict';

// var express = require('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

var connection = require('./config/connection');

connection.query('SELECT * FROM burgers', function (err, data) {
    console.log('Data should be empty');
    console.log(data);
    connection.end();
});

// var orm = require('../config/orm');

// orm.selectAll(function(err, data) {
//     console.log("Data from the orm!!");
//     console.log(data);
// })

// var PORT = process.env.PORT || 3000;

// var app = express();

// app.use(express.static(process.cwd() + '/public'));