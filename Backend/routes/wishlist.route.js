const express = require("express")
const jwt = require("jsonwebtoken");
const wishlistModel = require("../models/wishlist.model");

const wishlistRoute = express.Router()

wishlistRoute.get("/", async (req, res) => {
    try {
        const data = await wishlistModel.find()
        res.send({ Data: data});
    } catch (e) {
        res.send({msg:e.message})
    }
})

wishlistRoute.post("/add",async (req, res) => {
    const payload = req.body
    try {
        const newPost = new wishlistModel(payload);
        await newPost.save()
        res.send({ msg: "Product Saved", New_Post: newPost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})
wishlistRoute.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await wishlistModel.findByIdAndDelete(id);
        res.send({ msg: "Product Deleted" })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

module.exports = wishlistRoute