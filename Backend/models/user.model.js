const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone_number:String,
    password: String,
})

const UserModel=mongoose.model("user", userSchema)
module.exports=UserModel