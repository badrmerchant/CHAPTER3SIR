/**
 * Created by Badar on 11/18/2014.
 */
var User=require('mongoose').model('User1');

exports.create=function(req,res,next){

var user=new User(req.body);
    user.save(function(err){
            if(err){
                return next(err);
            }else{
                res.json(user);
            }

        });


}
exports.list=function(req , res ,next){
 console.log ("sdalflksd");

  User.find({},function(err,User){
        if(err){
            return next(err);
        }else{
          res.json(User);
    }

    });

//`res.send("ktroy");
}
exports.read=function(req,res){
    res.json(req.user);
};
exports.userByID=function(req,res,next,id){
    User.findOne({
        _id:id
    },function(err,user){
        if(err){
        return next(err);
    }else{
            req.user=user;
            next();
        }
    });
};

exports.update = function(req ,res , next){console.log("sdfdsfdssssssssssssssssssss");
    User.findByIdAndUpdate(req.user.id,res.body,function(err,user){
        if(err){
            return next(err);
        }else {
            res.json(user);
        }
    });
}
exports.delete=function(req ,res, next){
    req.user.remove(function(err){
            if(err){
                return next(err);
            }else{
                res.json(req.user);
            }
        }

    )
}