var express = require("express");
var router = express.Router();

const { loginValidate } = require("../middleware/loginValidate");
const { loginCheck } = require("../middleware/loginCheck");
const { cookieSet } = require("../middleware/cookieSet");

router.get("/login", (req, res) => {
  if (
    req.signedCookies.username == undefined ||
    req.signedCookies.username == null ||
    req.signedCookies.username == ""
  ) {
    res.render("login", { err: "Login" });
  } else {
    res.redirect("/api/auth");
  }
});

router.post("/login", loginValidate, loginCheck, cookieSet, (req, res) => {});

module.exports = router;
