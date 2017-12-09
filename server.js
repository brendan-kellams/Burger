'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expresshandlebars = require('express-handlebars');

var app = express();
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));
app.engine('handlebars', expresshandlebars({
    defaultLayout: 'main'
}));
app.set('view-engine', 'handlebars');

var PORT = process.env.PORT || 3000;
app.listen(PORT);

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
