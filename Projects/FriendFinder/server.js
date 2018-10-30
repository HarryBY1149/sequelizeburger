var express = require("express");
var path = require("path");
var $ = require("jquery");
var app = express();
var dir = path.join(__dirname, "app");
app.use(express.static(dir));
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function(err){
    if (err) throw err;
    console.log("Server listening on port: "+PORT);
})