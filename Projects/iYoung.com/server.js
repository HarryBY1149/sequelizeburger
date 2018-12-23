var express = require("express");
var app = express();
var expbars = require("express-handlebars");
var path = require("path");
var PORT = process.env.PORT || 8080;
var mysql = require("mysql")

app.engine("handlebars", expbars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
var dir = path.join(__dirname, "assets");

app.use(express.static(dir));





app.get("/", function(req, res){
    res.render("index");
    
})

app.listen(PORT, function(){
    console.log("listening on: " +PORT);
});