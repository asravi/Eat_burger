// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(value, cb) {
    orm.insertOne("burgers", value, function(res) {
      cb(res);
    });
  },
  update: function(condition, id, cb) {
    condition = "devoured = true"
    orm.updateOne("burgers", condition, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;