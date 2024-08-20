const db = require("../models");
const User = db.user;

exports.getUserDetails = async (req, res) => {
    const user = await User.findOne({
      _id: req.query.user_id,
    })
    res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email
    });
}
