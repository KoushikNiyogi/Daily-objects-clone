const express = require("express")
const jwt = require("jsonwebtoken");
const wishlistModel = require("../models/wishlist.model");

const wishlistRoute = express.Router()

wishlistRoute.get("/", async (req, res) => {
    let userId = req.body;
    console.log(userId);
    try {
        const data = await wishlistModel.find(userId)
        res.send({ Data: data });
    } catch (e) {
        console.log(e)
        res.send({ msg: e.message })
    }
})

wishlistRoute.post("/add", async (req, res) => {
    const payload = req.body;
    const post = await wishlistModel.findOne({ userId: req.body.userId,title : req.body.title });
    if (post) {
        res.send({ "msg": "product already exisists in wishlist" })
    } else {
        try {
            const newPost = new wishlistModel(payload);
            await newPost.save()
            res.send({ "msg": "Product Saved to wishlist", New_Post: newPost })
        } catch (e) {
            console.log(e)
            res.send({ "msg": e.message })
        }
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


//64572419803b19f9ae3e8418 1  6456999c3bbca272c563351a