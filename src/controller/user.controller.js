const express = require("express")
// const { append } = require("express/lib/response")
const router = express.Router()
const mongoose = require("mongoose")
const User = require("../model/user.model")

router.post("", async (req, res)=>{
    try {
        const users = await User.create(req.body) 
        return res.send(users)
    } catch (e) {
        console.log(e.message)
    }
})

router.get ("", async(req,res)=>{
    try {
        const users = await User.find().lean().exec()
        return res.send(users)
    }catch(e){
        console.log(e.message)
    }
})

module.exports= router