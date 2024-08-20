const controller = require("../controllers/auth.controller");

module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, Content-Type, Accept"
//     );
//     next();
//   });

  app.post("/api/signup",controller.signup);

  app.post("/api/signin", controller.signin);

  app.post("/api/signout", controller.signout);
};