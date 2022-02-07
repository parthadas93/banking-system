const mongoose = require("mongoose")

// - firstName (required)
// - middleName (optional)
// - lastName (required)
// - age (required)
// - email (required )
// - address ( required )
// - gender ( optional and should default to Female )
// - type (optional and it can take value of customer or employee and if not provided then default to customer

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    middleName: { type: String, require: false },
    lastName: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, require: true },
    adress: { type: String, require: true },
    gender: { type: String, require: false, default: "Female" },
    type: { type: String, require: false, default: "customer" },
    nominee: [{ type: String, require: false }]  
},
    {
        versionKey: false,
        timestamps: true
    }

)

const User = mongoose.model("user", userSchema)

module.exports= User