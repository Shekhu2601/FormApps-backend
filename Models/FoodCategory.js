const mongoose =require("mongoose")
const Schema = mongoose.Schema;
const FoodCategory = new Schema({
    
    CategoryName:{
        type:String,
      

    }

})
const FoodCategorys =mongoose.model("FoodCategory",FoodCategory )
module.exports=FoodCategorys;