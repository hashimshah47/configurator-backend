const controller = require("../controllers/model.controlller");

module.exports = function(app) {
  app.get("/api/get-model-price",controller.getModelPrice);
  app.post("/api/update-model-price", controller.updateModelPrice)
};