var express = require('express')
var router = express.Router()

const { loginValidate } = require("../middleware/loginValidate");
const { loginCheck } = require("../middleware/loginCheck")

router.get("/login", (req,res) => {
    res.render("login",{err:"Login"})
})


router.post("/login",loginValidate , loginCheck, (req, res) => {
    
    
})



module.exports = router;