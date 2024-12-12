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

exports.getModelById = async(req, res) => {
  const configuredModel = await Configuration.findOne({
      _id: req.query.project_id,
    })
    res.status(200).send({
      configuredModel
    });
}

exports.getAllModels = async(req, res) => {
  const models = await Configuration.find().populate("user_id", "-password")
    res.status(200).send({
      models
    });
}


exports.deleteModel = async(req, res) => {
  const model = await Configuration.deleteOne({
    _id: req.query.project_id
  })
  res.status(200).send({msg: "Model Deleted"})
}