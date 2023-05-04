const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name: String,
    email: String,
    phone_number:String,
    password: String,
})

const adminModel = mongoose.model("adminuser", adminSchema)
module.exports = adminModel