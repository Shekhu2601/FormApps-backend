const { required } = require("joi");
const mongoose =require("mongoose")
const Schema = mongoose.Schema;
const {UserModel} =require("./Users")
const Typebot = new Schema({
    Name :{
        type:String  
    },creator:{
            type: mongoose.Schema.ObjectId,
            ref:"UserModel",
            required:true
    
        }
      
  
})
const TypebotName =mongoose.model("TypebotName",Typebot )
module.exports=TypebotName;