const express = require("express");
require('dotenv').config();
const dbConnect = require("./database/db.js")
const Courier = require("./models/courier.model.js")
const User = require("./models/users.model.js");
const sendToken = require("./utils/jwtToken.js");
const app = express();
const cookieParser = require("cookie-parser");
const { isAuthenticatedUser , authorizeRoles} = require("./middleware/auth.js");



//Database connection
dbConnect();

//Global Middlewares
app.use(express.json());
app.use(cookieParser())

app.get("/" , (req ,res)=>{
    res.status(200).json({
        "message" : "hello world"
    })
})
 

// AUTH ROUTES
app.post("/sign-up" , async (req,res)=>{
    const {name , username , email , password} = req.body;

    try{
        const user = await User.create({
            name , username , email , password
        })

        sendToken(user,201,res)
    }catch(error){
        res.status(500).json({"success" : false , error})
    }
    
})


app.post("/sign-in" , async (req,res)=> {

    const {email , password} = req.body;

    
        if(!email || !password){
            return res.status(400).json({
                "success" : false,
                "message" : "please enter all details"
            })
        }

        const user = await User.findOne({email}).select("+password")

        if(!user){
            return res.status(401).json({
                "success":false,
                "message" : "user not found"
            })
        }

        const isPasswordMatched = user.comparePassword(password);

        if(!isPasswordMatched){
            return res.status(401).json({
                "success" : false,
                "message" : "invalid email password"
            })
        }

        sendToken(user,200,res)
    

    
})


app.post("/log-out" , (req,res)=>{

    try{
        res.cookie("token" , null , {
            expires:new Date(Date.now()),
            httpOnly:true
        })
    
        res.status(200).json({
            "success":true,
            "message":"logged out successfullt"
        })
    }catch(error){
        res.status(500).json({
            "success":false,
            "message": error
        })
    }
    
})



//API for getting all courier from database
app.get("/get-courier", isAuthenticatedUser , async (req,res)=>{

    try{
        const courierList = await Courier.find();
        res.status(200).json({
            courierList
        })
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error fetching products' });
    }

})






//API for adding new courier in database
app.post("/add-courier" , isAuthenticatedUser , async (req,res)=>{
   
    req.body.user = req.user.id;

    try{
        const courier = req.body;
        
        const newCourier = await Courier.create(courier);
    

        res.status(201).json({"success" : true , message : "Courier added successfully"})
    }catch(error){
        console.log(`Error saving product : ${error}`)
    }

})



const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`Server is running on port numbrt ${PORT}`)
})