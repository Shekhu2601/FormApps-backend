const { required } = require("joi");
const mongoose =require("mongoose")
const Schema = mongoose.Schema;
const {UserModel}= require("./Users")
const Folder = new Schema({
    FolderName :{
        type:String  ,
       
    },
    creator:{
        type: mongoose.Schema.ObjectId,
        ref:"UserModel",
        required:true

    }
  
})
const FolderName =mongoose.model("FolderName",Folder )
module.exports=FolderName;