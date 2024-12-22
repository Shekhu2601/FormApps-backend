const mongoose =require("mongoose")
const Schema = mongoose.Schema;
const Food_Item = new Schema({
    name :{
        type:String,
        
    },
    CategoryName:{
        type:String,
      

    },
   
    img:{
        type:String,
        
         
    },
    price:{
        type:String,  

    },
    description:{
        type:String,  

    },
})
const Products =mongoose.model("Food_Item",Food_Item )
module.exports=Products;