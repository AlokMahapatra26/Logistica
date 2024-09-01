const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://alok:ImdOZqreGOVtBDK9@short-fiction-db.stlybwd.mongodb.net/IMS")
        console.log("DB connected successfully")
    }catch(error){
        console.log(`Mongo connection error : ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB;