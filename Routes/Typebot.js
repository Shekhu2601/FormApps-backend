
const ensureAuthenticated = require("../Middilewere/Auth");
const Typebot=require("../Models/Typebot")

const router = require('express').Router();
router.post('/typebot', ensureAuthenticated, async (req, res)=>{
    const {Name ,creator} =req.body;
    const user =req.user;
    const Tname = new Typebot({Name ,creator:user}) 
    await Tname.save()
    
    res.status(201).json({message:"Typebot craete succesfully ",
        success: true
    })
})



router.get('/Typebot', async (req, res) => {
    const Tname = await Typebot.find()
    res.status(200).json(Tname)
   
});
router.delete("/typebot/:id", async (req,res)=>{
    const id =req.params.id;
    await Typebot.findByIdAndDelete(id);
    
    res.status(200).json({message:"Typebot delete successfully"});
})

module.exports = router;