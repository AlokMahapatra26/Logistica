const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true , "Please enter your name"],
        maxLength:[30, "Name cannot exceed 30 character"],
        minLength:[3 , "Name should have atleast 3 character"]
    },

    username : {
        type : String,
        unique:true,
        required:[true , "Please enter your username"],
        maxLength:[30, "username cannot exceed 30 character"],
        minLength:[3 , "username should have atleast 3 character"]
    },
    email : {
        type : String,
        required:[true , "Please enter your email"],
        unique:true,
        validate :[validator.isEmail , "Please enter valid email"]
    },
    password : {
        type:String,
        required:[true , "Please enter your password"],
        minLength:[8 , "Password should be greater than 8 character"],
        select:false
    },
  
    role:{
        type:String,
        default:"user"
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date
})

userSchema.pre("save" , async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password , 5)
})

//Comparing password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


// JWT TOKEN

userSchema.methods.getJWTToken = function () {
    return jwt.sign({id:this._id} , process.env.JWT_SECRET , {
        expiresIn:process.env.JWT_EXPIRE
    })
}



const User = mongoose.model('User' , userSchema);

module.exports = User;