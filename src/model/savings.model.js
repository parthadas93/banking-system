const mongoose = require("mongoose")
// - account_number ( required and should be unique)
// - balance ( required )
// - interestRate ( required )
// - createdAt (required)
// - updatedAt (required)

const savingSchema = new mongoose.Schema({
    account_number: { type: Number, require: true, unique: true },
    balance: { type: Number, require: true },
    interestsRate: { type: Number, require: true },  
},
    {
    timestamps: true
}
)

const Savings = mongoose.model("savings", savingSchema)

module.exports= Savings