
const fs = require("fs")
const recordMiddle = (req,res,next)=>{
      
    if(req.url === "PATCH"){
        fs.appendFileSync("records.txt",``)
        next()
    }
    else if(req.url == "DELETE"){
        fs.appendFileSync("records.txt",``)
        next()
    }
    else{
        next()
    }
       
}

module.exports = {
    recordMiddle
}