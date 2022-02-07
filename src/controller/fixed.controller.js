const express = require("express")
const router = express.Router()
const Fixed = require("../model/fixed.model")


router.post("", async (req, res) => {
    try {
        const fixed = await Fixed.create(req.body)
        return res.send(fixed)
    }catch(e){
        console.log(e.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const fixed = await Fixed.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send(fixed)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports= router