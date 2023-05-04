const express = require("express")
const jwt = require("jsonwebtoken");
const productModel = require("../models/product.model");
const { auth } = require("../middlewares/auth");

const productRouter = express.Router()

productRouter.get("/search", async (req, res) => {
    let query = req.query;
    let queryobj ={};
    const sortobj = {};
    let $and = [];
    if(query.sort){
         sortobj["price"] = query.sort.split("#")[1] == "asc" ? 1 : -1; 
    }
    if(query.color){
        queryobj["color"] = query.color;
    }
    if(query["price_gt"]!=undefined&&query["price_lt"]!=undefined){
        $and.push({"$expr" : {"$gt" : [{"$toInt" :"$price"} , +query.price_gt]}})
        $and.push({"$expr" : {"$lt" : [{"$toInt" :"$price"} , +query.price_lt]}})
        queryobj["$and"] = $and;
    }
    if(query["q"]!=undefined){
        queryobj.title = { $regex:`${query["q"]}`, $options: 'i' }
    }
    
    try {
        const data = await productModel.find(queryobj).sort(sortobj)
        res.send({ Data: data,datalength : data.length});
    } catch (e) {
        res.send({msg:e.message})
    }
})

productRouter.get("/", async (req, res) => {
    let query = req.query;
    let queryobj ={};
    const sortobj = {};
    let $and = [];
    if(query.sort){
         sortobj["price"] = query.sort.split("#")[1] == "asc" ? 1 : -1; 
    }
    if(query.color){
        queryobj["color"] = query.color;
    }
    if(query["price_gt"]!=undefined&&query["price_lt"]!=undefined){
        $and.push({"$expr" : {"$gt" : [{"$toInt" :"$price"} , +query.price_gt]}})
        $and.push({"$expr" : {"$lt" : [{"$toInt" :"$price"} , +query.price_lt]}})
        queryobj["$and"] = $and;
    }
    try {
        const data = await productModel.find()
        res.send({ Data: data});
    } catch (e) {
        res.send({msg:e.message})
    }
})

productRouter.post("/add",auth,async (req, res) => {
    const payload = req.body
    try {
        const newPost = new productModel(payload);
        await newPost.save()
        res.send({ msg: "Product Saved", New_Post: newPost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

productRouter.patch("/update/:id", async (req, res) => {
    const payload = req.body
    const id = req.params.id;
    try {
        await productModel.findByIdAndUpdate(id, { ...payload });
        let UpdatePost = await productModel.findById(id)
        res.send({ msg: "Product Updated", Updated_Post: UpdatePost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

productRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await productModel.findByIdAndDelete(id);
        res.send({ msg: "Product Deleted" })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

module.exports = productRouter