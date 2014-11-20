/**
 * Created by Badar on 11/18/2014.
 */
var mongoose=require('mongoose'),
Schema=mongoose.Schema;

var UserSchema=new Schema({
    firstName:String,
    lastName:{
        type:String,
        index:true    },


    email:{
        type: String,
        required: true

    },
    username:{
        type:String,
        trim:true,
        unique:true
    },
    password:{
        type: String,
        required: true },
    created:{
        type:Date,
        default:Date.now
    }
})
UserSchema.virtual('fullName').get(function(){
    return this.firstName+ '' +this.lastName;
}).set(function(fullName){
    var splitName=fullName.split('');
    this.firstName=splitName[0]|| '';
    this.lastName=splitName[1] || '';
})
UserSchema.set('toJSON',{getters:true,virtuals:true});

UserSchema.statics.findOneByUsername = function(username,callback){

    this.findOne({username:new RegExp('username' ,'i')},callback);

};
UserSchema.method.authenticate=function(password){
    return this.password ===password;
};

mongoose.model('User1',UserSchema);
//mongoose.model('User',UserSchema);