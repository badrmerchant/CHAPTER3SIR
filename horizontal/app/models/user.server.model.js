/**
 * Created by Badar on 11/18/2014.
 */
var mongoose=require('mongoose'),
Schema=mongoose.Schema;

var UserSchema=new Schema({
    firstName:String,
    lastName:String,
    email:{
        type: String,
        required: true,
        index:true
    },
    username:{
        type:String,
        trim:true,
        unique:true
    },
    password:{ type: String, required: true },
    created:{
        type:Date,
        default:Date.now
    }
});
UserSchema.virtual('fullName').get(function(){
    return this.firstName+ '' +this.lastName;
}).set(function(fullName){
    var splitName=fullName.split('');
    this.firstName=splitName[0]|| '';
    this.lastName=splitName[1] || '';
})
UserSchema.set('toJSON',{getters:true,virtuals:true})
mongoose.model('User',UserSchema);