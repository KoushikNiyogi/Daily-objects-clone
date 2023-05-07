const mongoose = require("mongoose")

const wishlistSchema = mongoose.Schema({
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
    userId:String
})

const wishlistModel = mongoose.model("wishlistItem", wishlistSchema)
module.exports = wishlistModel