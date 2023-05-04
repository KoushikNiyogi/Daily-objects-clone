
const fs = require("fs")
const jwt = require("jsonwebtoken")
const Logger =(req,res,next)=>{
       const method = req.method;
       const token = req.headers.authorization
       const decoded = jwt.verify(token, "tough-request")
       if(decoded){
              console.log("decoded",decoded)
              userId = decoded.userId
              console.log("userid",userId)
              const date = Date()
              fs.appendFileSync("logger.txt",`\nUserId:${userId}, Method:${method}and, Date:${date}`)
       }
  
       next()
}

module.exports = {Logger}