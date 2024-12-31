
const Typebot=require("../Models/Typebot")

const router = require('express').Router();
router.post('/typebot', async (req, res)=>{
    const {Name} =req.body;
    const Tname = new Typebot({Name}) 
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