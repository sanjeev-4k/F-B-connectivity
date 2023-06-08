const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type: String,
        required:true,
    }, 
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});
const User1= mongoose.model("User1",UserSchema);
module.exports = User1;