const emp=require("./routes/employee")
var express = require("express");

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/employee",emp);
app.listen(4000, function(){
    console.log("Server Started on port  " + 4000 );
})

