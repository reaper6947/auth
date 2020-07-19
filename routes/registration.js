var express = require("express");
var router = express.Router();

//validates user info
const { regValidate } = require("../middleware/regValidate");
// checks and saves user info
const { regUserSave } = require("../middleware/regUserSave");

router.get("/register", (req, res) => {
  if (
    req.signedCookies.username != undefined ||
    req.signedCookies.username != null
  ) {
    res.redirect("/api/auth");
  } else {
    res.render("register", { err: "Create Account" });
  }
});

router.post("/register", regValidate, regUserSave, (req, res) => {});

module.exports = router;
