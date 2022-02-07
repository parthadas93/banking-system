const express = require("express")
const router = express.Router()
const MasterAccount = require("../model/masterAccount.model")

router.get("", async (req, res) => {
    try {
        const masters = await MasterAccount.find().lean().exec()
        return res.send(masters)
    } catch (e) {
        console.log(e.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const master = await MasterAccount.findById(req.params.id)
        return res.send(master.account_number ,master.balance )
    } catch {
        
    }
})

module.exports= router