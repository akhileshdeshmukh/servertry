const mysql= require("mysql");
const express= require("express");
const app=express();
const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"manager",
    database:"mean",
    port:9099
});
connection.connect();
app.get("/",function(req,res){
connection.query(`select * from emp`,function(err,result){
if(err==null)
{
    res.contentType("application/json");
    res.send(JSON.stringify(result));
}else
{
    res.contenType("application/json");
    res.send(JSON.stringify(err));
}
});
});
module.exports=app;