/**
 * Created by Badar on 11/15/2014.
 */
module.exports=function(app){

    var index=require('../controllers/index.server.controller');
    app.get('/',index.render);

    return app;
}