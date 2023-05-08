const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  images: Array,
  color: String,
  details: Array,
  category: String,
  discounted_price: String,
  description: String,
  price: String,
  stock:Number,
  userId: String,
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
