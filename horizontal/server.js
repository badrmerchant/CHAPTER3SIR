/**
 * Created by Badar on 11/15/2014.
 */
 process.env.NODE_ENV=process.env.NODE_ENV || 'development';
var express = require('./config/express');

 var app=express();

 app.listen(3000);
module.exports=app;

console.log('server is running at http://localhost:3000/');