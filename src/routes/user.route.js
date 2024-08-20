const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.get("/api/get-user-details",controller.getUserDetails);
};