const express = require("express")
const router = express.Router()
const SavingsAccount = require("../model/savings.model")

router.post("", async (req, res) => {
    try {
        const Savings = await SavingsAccount.create(req.body)
        return res.send(Savings)
    } catch (e) {
        console.log(e.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const Savings = await SavingsAccount.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send(Savings)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router