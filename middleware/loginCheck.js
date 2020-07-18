const User = require("../model/authUser");
const bcrypt = require("bcrypt");

const loginCheck = async (req, res, next) => {
  try {
    const userCheck = await User.findOne({ username: req.body.username });
    if (userCheck === null) {
      res.render("login", { err: "user doesnt exist, try again" });
    } else if (await bcrypt.compare(req.body.password, userCheck.hashedPassword)) {
      res.render("login", { err: "Logged in" });
      next();
    } else {
      res.render("login", { err: "Wrong Password" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { loginCheck };
