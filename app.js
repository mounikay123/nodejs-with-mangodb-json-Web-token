var express =require("express"),
app =express();

var bodyParser = require('body-parser'),
jwt=require("jsonwebtoken"),
fs = require('fs');
 var mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/laptops",{ useNewUrlParser: true });
app.use(bodyParser.json());
app.use("/v1", require("./routes"));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent');
    // if(req.method === 'OPTIONS') {
    //     res.sendStatus(400);
    // }else {
    //     next();
    // }
if(req.url.substr(-1)==='/'){
    return res.send({maseeag:"Welcome to My node app"});
}
next();
});

app.listen(8080);
module.exports=app;