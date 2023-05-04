
const jwt = require("jsonwebtoken")
const auth =  (req, res, next) => {
   const token = req.headers.authorization
   if (token) {
      const decoded = jwt.verify(token, "tough-request")
      if (decoded) {
         console.log("decoded",decoded)
         console.log("userid",decoded.userId)
         req.body.userId = decoded.userId
         next()
      }
      else {
         res.send("Login First")
      }
   }
   else {
      res.send("Login First")
   }
}

module.exports = { auth }