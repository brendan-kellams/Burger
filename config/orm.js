'use strict';

var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, callback) {

        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) {
            if(err) throw err;
            callback(result)
        });
    },

    update: function(tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function(err,result) {
            if(err) throw err;
            cb(result);
        })
    },

    create: function(tableInput, val, cb) {
        connection.query('INSERT INTO ' + tableInput + " (burger_name, devoured) VALUES ('"+val+"', FALSE);", function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;