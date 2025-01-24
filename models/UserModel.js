const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
     name:{
        type:String,
        default:null
     },
     image_uri:{
        type:String,
        default:null

     },
     pdf_file:{
        type:String,
        default:null
     },
     video_file:{
        type:String,
        default:null
     }
})

module.exports=mongoose.model("User",UserSchema)