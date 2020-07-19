const express = require("express");
const router = express.Router();


router.get("/auth", (req, res) => {
  if (
    req.signedCookies.username == undefined ||
    req.signedCookies.username == null ||
    req.signedCookies.username == ""
  ) {
    console.log("no username");
    res.redirect("/api/login");
  } else {
      res.send("user " + req.signedCookies.username + " logged in");
  }

  
});

module.exports = router;
