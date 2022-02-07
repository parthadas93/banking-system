const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://partha:das@cluster0.ta2uk.mongodb.net/test")
}

module.exports = connect