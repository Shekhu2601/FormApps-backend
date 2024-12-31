const mongoose =require("mongoose")
const Schema = mongoose.Schema;
const Typebot = new Schema({
    Name :{
        type:String  
    }
  
})
const TypebotName =mongoose.model("TypebotName",Typebot )
module.exports=TypebotName;