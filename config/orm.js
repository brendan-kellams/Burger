'use strict';

var connection = require('./connection.js');

var orm = {
    selectAll: function(callback) {
        var query = 'SELECT * FROM burgers ORDER BY burger_name ASC';

        connection.query(query, callback);
    }
}

module.exports = orm;