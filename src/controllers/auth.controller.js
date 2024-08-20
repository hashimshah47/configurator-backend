const db = require("../models");
const User = db.user;
var bcrypt = require("bcryptjs");
exports.signup = async (req, res) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      company: req.body.company,
      marketing: req.body.marketing
    });
    await user.save();
    res.send({ message: "User was registered successfully!" });
}



exports.signin = async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
    })
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
        return res.status(404).send({ message: "Invalid Password!" });
    }
    res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email
    });
}


exports.signout = async (req, res) => {
    try {
      req.session = null;
      return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
      this.next(err);
    }
  };