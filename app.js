var express = require ("express");
var app = express();
app.get("/",function(req,resp){
    resp.send("Hello to all");
})
app.listen(7000)
console.log("Ok Server is running......")