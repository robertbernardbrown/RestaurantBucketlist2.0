const orm = require("../config/orm");

const restaurant = {
  all: (user_id, cb) => {
    orm.selectAll("restaurants", user_id, res => {
      cb(res);
    });
  },
  create: (restaurant, user_id, cb) => {
    orm.insertOne("restaurants", restaurant, user_id, res => {
      cb(res);
    });
  },
  update: (visitedBool, id, cb) => {
    orm.updateOne("restaurants", visitedBool, id, res => {
      cb(res);
    });
  },
  delete: (id, cb) => {
    orm.deleteOne("restaurants", id, res => {
      cb(res);
    });
  },
  auth: (username, password, cb) => {
    orm.userAuth("users", username, password, res => {
      cb(res);
    });
  },
  login: (username, cb) => {
    orm.login("users", username, (err, res) => {
      cb(err, res);
    });
  },
  findOne: (username, cb) => {
    orm.findByUsername("user_id", "users", username, (err, res) => {
      cb(err, res);
    });
  },
  remove: (cb) => {
    orm.remove("users", (err, res) => {
      cb(err, res);
    });
  }
};

module.exports = restaurant;
