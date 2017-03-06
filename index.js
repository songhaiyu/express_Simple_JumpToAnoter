/**
 * Created by FL's PC on 2017/3/6.
 */

var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname,'public')));

var indexRouter = require('./public/routes/index');
var userRouter = require('./public/routes/users');

app.use('/',indexRouter);
app.use('/users',userRouter);


/**
 * 跳转到了test.html
 */
app.get("/test.html",function (req,res) {

    res.sendfile(__dirname+"/test.html");
})

/**
 * 路径与html中action对应，接收数据并显示出来。
 */
app.get("/name_get",function (req,res) {

    jname = {
        name : req.query.uname
    }
    console.log(jname);
    res.send(JSON.stringify(jname));
})



app.listen(8080,function () {
    
    console.log("servering....");
});

