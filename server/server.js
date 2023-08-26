const express = require("express")
const cors = require("cors")

const bodyParser = require("body-parser");
const app = express();
const connect = require("./connection/db")
const Router = require("./routes/file")


app.use(bodyParser.json())      //no need of this if ur are using epress.json()  => req.body
app.use(express.json());
app.use(cors())
app.use('/public', express.static('public'));      //for uploading images in public folder
connect()

app.use("/api",Router)
app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})