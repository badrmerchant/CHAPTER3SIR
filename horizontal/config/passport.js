/**
 * Created by Badar on 11/20/2014.
 */
var passport=require('passport'),
    mongoose=require('mongoose');

module.exports=function(){
    var User=mongoose.model(User);
    passport.serializeUser(function(user,done){
        done(null,user.id);
    });
    passport.deserializeUser(function(id,done){
        user.findOne({
            _id:id
        },'-password -salt',function(err,user){
            done(err,user);




        });
        require('./strategies/local.js')();
    });
}
