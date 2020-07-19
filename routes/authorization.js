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
      console.log(req.signedCookies.username + " logged in");
      res.end();
  }

  
});

module.exports = router;
