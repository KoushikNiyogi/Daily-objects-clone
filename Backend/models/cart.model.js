const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    title:String,
    images: Array,
    color: String,
    brand: String,
    details:Array,
    category:String,
    offer:String,
    discounted_price:String,
    description:String,
    price:String,
    userId:String,
    payment:Boolean,
    dispatch:Boolean,
})

const cartModel = mongoose.model("cartItem", cartSchema)
module.exports = cartModel