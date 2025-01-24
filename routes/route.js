const express=require("express")
const { CreateUser } = require("../controllers/UserController")

const router=express.Router()


router.post("/createuser",CreateUser)

module.exports={router}