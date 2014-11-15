/**
 * Created by Badar on 11/14/2014.
 */
var express=require('express');
var app=express();
 app.use('/',function(req,res){
     res.send('hello world');

 });

 app.listen(3000);
console.log("server is running at http://locahost:3000");
module.exports=app;
