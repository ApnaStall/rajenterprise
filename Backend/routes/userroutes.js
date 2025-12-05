const express=require("express")
const router=express.Router()
const UserRegistration = require("D:/client/rajenterprise/Backend/controller/UserController.js")


router.post("/registration",UserRegistration)


module.exports=router;