const express=require("express")
const fileupload=require("express-fileupload")
const path = require('path');
const { dbconnect } = require("./config/database");
const { router } = require("./routes/route");
const app=express()
app.use('/uploads/',express.static(path.join(__dirname,'/uploads')))
app.use(fileupload())
const PORT=9000
dbconnect()
app.use("/api/v1",router)
app.listen(PORT,()=>{
    console.log(`app is listning on port ${PORT}`)
})