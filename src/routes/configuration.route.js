const controller = require("../controllers/configuration.controller");

module.exports = function(app) {
  app.post("/api/save-model",controller.saveModel);
  app.get("/api/get-user-models", controller.getUserModels)
  app.delete("/api/delete-user-model", controller.deleteModel)
};