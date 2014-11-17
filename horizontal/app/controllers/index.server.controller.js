/**
 * Created by Badar on 11/15/2014.
 */
//exports.render=function(req,res){
//
//    res.send('<h1>hello Badar and  world</h1>');
//
//
//};
exports.render = function(req,res){

    if(req.session.lastVist){
        console.log(req.session.lastVist)
    }
    req.session.lastVist=new Date();
    res.render('index' ,{
        title:"Hello world"
    });
//    res.render(index1,{
//        title:"badar ahmed sheikh"
//    });
}//g