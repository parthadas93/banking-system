const express = require("express")
const router = express.Router()
const Branch = require("../model/branch.model")


router.get("", async (req, res) => {
    try {
        const branchs = await find().lean().exec()
        return res.send(branchs)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports= router