const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
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
    adminId:String
})

const productModel = mongoose.model("product", productSchema)
module.exports = productModel