const mongoose = require("mongoose")

// - balance (required) This is the total balance that the person has in the bank
// - createdAt (required)
// - updatedAt (required)

const masterAccountSchema = new mongoose.Schema({
    balance: { type: Number, require: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    branch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch",
        require: true
    }

},
    {
        timeStamps: true
}

)

const Master = mongoose.model("master",masterAccountSchema )

module.exports = Master