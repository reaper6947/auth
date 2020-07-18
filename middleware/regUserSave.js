
const User = require("../model/authUser");
const bcrypt = require("bcrypt");

const regUserSave = async (req, res, next) => {
    try {
      //checks if username exists 
      const userExists = await User.exists({ username: req.body.username });
      if (userExists) {
        res.render("register",{err:"username taken, try again"});
      }
      else {
         //hashes the user password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUserInfo = new User({ username: req.body.username, hashedPassword });
        newUserInfo.save();
        res.redirect("/api/login");
        next()
      }
    } catch (err) {
      console.log(err);
    }
}
  

module.exports = {regUserSave};