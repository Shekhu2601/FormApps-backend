/*const ensureAuthenticated = require('../Middilewere/Auth');
const Products=require("../Models/ProductS")
const FoodCategory =require("../Models/FoodCategory")
const router = require('express').Router();
router.post('/product', async (req, res)=>{
    const {name, CategoryName,img,price, description} =req.body;
    const Item = new Products ({name, CategoryName,img,price, description}) 
    await Item.save()
    res.status(200).json({message:"Item craete succesfully "})
})
router.post('/foodCategory', async (req, res)=>{
    const { CategoryName} =req.body;
    const FItem = new FoodCategory ({ CategoryName}) 
    await FItem.save()
    res.status(200).json({message:"Food Category craete succesfully "})
})

router.get('/foodscategory', async (req, res) => {
    const Fitems = await FoodCategory.find()
    res.status(200).json(Fitems)
   
});
router.get('/foodsItem', async (req, res) => {
    const items = await Products.find()
    res.status(200).json(items)
   
});

module.exports = router;*/