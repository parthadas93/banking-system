const mongoose = require("mongoose")
// - name (required)
// - address (required)
// - IFSC (required and string)
// - MICR (required and number )
// - createdAt (required)
// - updatedAt (required)

const branchSchema = new mongoose.Schema({

    name: { type: String, require: true },
    adress: { type: String, require: true },
    IFSC: { type: String, require: true },
    MICR: {type: String, require: true},
},
    {
    timeStamps: true
}


)


const Branch = mongoose.model("branch", branchSchema)

module.exports = Branch