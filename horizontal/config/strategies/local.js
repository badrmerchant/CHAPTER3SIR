/**
 * Created by Badar on 11/20/2014.
 */
var passport= require('passport'),
    localStrategy=require('passport-local').Strategy,
    User=require('mongoose').model('User1');
//next==done
module.exports=function(){
    passport.use(new localStrategy(function(username,password,done){
        User.findOne({
            username:username
        },function(err,user){
            if(err){
                return done(err);
            }
            if(!user){
                return done(null,false,{
                    message:'Unknown User'
                });
            }
            if(!user.authenticate(password)){
                return done (null,false,{
                    message:'Invalid pssword'
                });
            }
            return done(null,user);
        });

    }));
};