const { default: mongoose } = require("mongoose");

const dataSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    profile:String
})


module.exports = mongoose.model("data",dataSchema)