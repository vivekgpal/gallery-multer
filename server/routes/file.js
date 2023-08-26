const router = require("express").Router();
const data = require("../models/data")
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `public/`);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const upload = multer({ storage: storage });
  

router.post("/user",upload.single("profile"),async(req,res)=>{
   try {
    const newUser = new data({
        name : req.body.name,
        email : req.body.email,
        age : req.body.age,
        profile: req.file.filename
    })
    const user = await newUser.save()
    console.log(req.file)
   console.log(user)
   } catch(err) {
    console.log("something went wrong")
    console.log(err)
     res.send(err)
   }
})

router.get("/user",async(req,res)=>{
   const alldata = await data.find({})
   res.json(alldata)
})

router.delete("/:id",async(req,res)=>{
   
  console.log(req.params.id)

    try {
      const deleteData = await data.findByIdAndDelete(req.params.id)
      console.log(deleteData)
  
      console.log("delete",deleteData)
      res.send("data deleted")
   
    } catch (error) {
      res.send("something went wrong")

    }
})




module.exports = router