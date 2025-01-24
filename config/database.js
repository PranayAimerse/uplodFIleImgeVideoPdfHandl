const mongoose=require("mongoose")
require("dotenv").config()
exports. dbconnect=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("database connection successfull") 
    } catch (error) {
        console.log(error)
        console.log("erro in database connection")
        
    }
}