const db = require("../models");
const Configuration = db.configuration;

exports.saveModel = async (req, res) => {
    const configuration = new Configuration({
        user_id: req.body.user_id,
        model: req.body.model,
        projectName: req.body.projectName
      });
      await configuration.save();
      res.send({ message: "Configuration saved successfully!" });
}

exports.getUserModels = async(req, res) => {
  const modelsArray = await Configuration.find({
      user_id: req.query.user_id,
    })
    res.status(200).send({
      modelsArray
    });
}

exports.deleteModel = async(req, res) => {
  const model = await Configuration.deleteOne({
    id: req.query.model_id
  })
  res.status(200).send({msg: "Model Deleted"})
}