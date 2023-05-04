const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const UserModel = require("../models/user.model")
const { auth } = require("../middlewares/auth")

const userRouter = express.Router()

userRouter.get("/", auth, async (req, res) => {
    try {
        let User = await UserModel.find()
        if (User.length > 0) {
            res.send({ users: User });
        } else {
            res.send({ msg: `No user found` })
        }
    } catch (e) {
        res.send({ msg: "Error", reason: e })
    }
})


userRouter.post("/register", async (req, res) => {
    const { name, email, phone_number, password } = req.body
    console.log(req.body)
    try {
        let ExistingUser = await UserModel.findOne({ email: email })
        if (ExistingUser) {
            res.send({ msg: "User Already Exists, Try Login" })
        } else {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) throw err
                let newUser = new UserModel({ name, email, phone_number, password: hash, })
                await newUser.save();
                res.send({ msg: "New User Added", user: newUser })
            })
        }
    } catch (e) {
        console.log(e)
        res.send(`Registration Error: - ${e}`)
    }
})


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        let User = await UserModel.find({ email: email })
        if (User.length > 0) {
            bcrypt.compare(password, User[0].password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userId: User[0]._id }, "tough-requestUYJHMN¥");
                    res.send({ msg: `Login Success ! WelcomeBack ${User[0].name}`, token: token });
                } else {
                    res.send({ msg: "Wrong Password" })
                }
            })
        } else {
            res.send({ msg: `Email ${email} does not Exist. Try Registring` })
        }
    } catch (e) {
        res.send({ msg: "Error", reason: e })
    }
})

module.exports = userRouter