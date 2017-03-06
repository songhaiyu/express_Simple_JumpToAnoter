
var express = require("express");

var router = express.Router();

module.exports = router.get("/users",function (req,res) {

    //var namemsg = document.getElementById("name");

    //res.send('users page');
    res.redirect("https:www.baidu.com");
    console.log("user page");
});
