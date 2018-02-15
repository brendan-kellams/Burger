var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },

    update: function(id, cb) {
        orm.update('burgers', id, cb);
    },

    create: function(name,cb) {
        orm.create('burgers', name, cb);
    }
}

module.exports = burger;