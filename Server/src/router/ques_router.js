const Ques = require('../models/questions')
const User=require('../models/user')
const express= require('express')
const router = new express.Router()
const auth=require("../middleware/auth")
const jwt=require("jsonwebtoken")

router.post("/postQues",async(req,res)=>{
    const {body}=req.body
    // console.log(req.cookies.token)
    try{
        const token =req.cookies.token
        
        const verified = await jwt.verify(token, "secret_key");
        
        const user= await User.findById(verified.user)
       
        const author=user.name
       
        // res.send(user.name)
        const ques= new Ques({author,body})
        const newQues=await ques.save()
        res.json(newQues)
        // console.log(newQues)


    }
catch(e){
    res.status(404).send(e)
}
})

//send all the question
router.get('/',async(req,res)=>{
    console.log(req.cookies.token)
try
{
const user=await Ques.find()
res.json(user)

}
catch(e){
    res.status(404).send(e)
}

})
router.get("/:id", async (req, res) => {
    const _id = req.params.id;
   console.log("Hi:",_id)
    // const tagArray = [];
    // var tagArrayName = [];
  

    try {
        
        const ques = await Ques.findById(_id)
        
        if (!ques) {
            return res.send("No user found")
        }
        
        res.status(201).send(ques)
         console.log(ques)
    } catch (e) {
        res.send("No user found")
    }
})

module.exports=router