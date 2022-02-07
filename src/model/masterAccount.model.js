const mongoose = require("mongoose")

// - balance (required) This is the total balance that the person has in the bank
// - createdAt (required)
// - updatedAt (required)

const masterAccountSchema = new mongoose.Schema({
    balance: {type:Number, require: true},
},
    {
        timeStamps: true
}

)

module.exports = masterAccountSchema