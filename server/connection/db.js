const mongoose = require("mongoose")

const connect = async()=>{
    try {
       const db =await mongoose.connect("mongodb://0.0.0.0:27017/file-uploader",{useNewUrlParser:true})
       db && console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connect