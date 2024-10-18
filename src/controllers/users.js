const jwt = require("jsonwebtoken");
const User = require("../models/users");
exports.userRegister = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //check if user already exist
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).send("User Already Registered");
    }

    user = User({
      username: username,
      password: password,
    });

    await user.save();

    res.send("User Registered Successfully");
  } catch (error) {
    res.status(500).send(err);
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //find user
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send("Invalid Username or password");
    }

    //generate JWT token
    const token = jwt.sign({ _id: user._id }, "randomsecretKey", {
      expiresIn: "1h",
    });

    res.send(token);
  } catch (error) {
    res.status(500).send(err);
  }
};
