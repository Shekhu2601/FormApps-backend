
const ensureAuthenticated = require("../Middilewere/Auth");
const Folders=require("../Models/Folder")
const {UserModel} =require("../Models/Users")
const router = require('express').Router();
router.post('/folder', ensureAuthenticated, async (req, res)=>{
    const {FolderName , creator} =req.body;
    const user =req.user;
    const Fname = new Folders ({FolderName,creator:user}) 
    await Fname.save()
    
    res.status(201).json({message:"Folder craete succesfully ",
        success: true
    })
})



router.get('/folder', async (req, res) => {
    const Fname = await Folders.find()
    res.status(200).json(Fname)
   
});
router.delete("/:id", async (req,res)=>{
    const id =req.params.id;
    await Folders.findByIdAndDelete(id);
    
    res.status(200).json({message:"Folder delete successfully"});
})

module.exports = router;