
const Folders=require("../Models/Folder")

const router = require('express').Router();
router.post('/folder', async (req, res)=>{
    const {FolderName} =req.body;
    const Fname = new Folders ({FolderName}) 
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