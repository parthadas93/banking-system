const express = require("express")
const router = express.Router()
const MasterAccount = require("../model/masterAccount.model")

router.get("", async (req, res) => {
    try {
        const master = await MasterAccount.find().lean().exec()
        console.log("yes")
        return res.send(master)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports= router