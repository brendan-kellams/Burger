'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err)throw err;
    console.log("connected as id: " + connection.threadId);
});


module.exports = connection;