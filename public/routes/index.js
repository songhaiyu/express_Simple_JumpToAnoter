/**
 * Created by FL's PC on 2017/3/6.
 */


var express = require("express");

var router = express.Router();



module.exports = router.get("/",function (req,res) {

    res.send('index page');
    console.log("index page");
});

/*
module.exports = router.get("/test.html",function (req,res) {

    res.sendFile(__dirname + "/test.html");
    console.log("test.html  ");
})*/
