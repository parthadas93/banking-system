const express = require("express")
const app = express()
const connect = require("./config/db")
const userController = require("../src/controller/user.controller")
const branchsController = require("../src/controller/branch.controller")
const masterAccountController = require("./controller/masterAccount.controller")
const savingsController = require("./controller/savings.controller")
const fixedController = require("./controller/fixed.controller")




app.use(express.json())
app.use("/user", userController)
app.use("/branchs", branchsController)
app.use("/master", masterAccountController)
app.use("/savings", savingsController)
app.use("/fixed",fixedController )

app.listen(2523, async function () {
    try {
        await connect() 
        console.log("listining to port 2523")
    } catch (e) {
        console.log(e.message)
    }
    
})