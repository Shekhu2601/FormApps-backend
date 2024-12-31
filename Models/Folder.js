const { required } = require("joi");
const mongoose =require("mongoose")
const Schema = mongoose.Schema;
const Folder = new Schema({
    FolderName :{
        type:String  ,
       
    }
  
})
const FolderName =mongoose.model("FolderName",Folder )
module.exports=FolderName;