const mongoose = require("mongoose")

// - account_number ( required and should be unique)
// - balance ( required )
// - interestRate ( required )
// - startDate ( required )
// - maturityDate (required )
// - createdAt (required)
// - updatedAt (required)

const fixedSchema = new mongoose.Schema({
    account_number: { type: Number, require: true, unique: true },
    balance: { type: Number, require: true },
    interestRate: { type: Number, require: true },
    maturityDate: { type: Date, default: Date.now },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    master_account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Master",
        require: true
    }
},
    {
    timeStamps: true
}

)

const FixedAccount = mongoose.model("fixed", fixedSchema)

module.exports = FixedAccount