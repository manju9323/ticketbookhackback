const mongoose=require("mongoose");

const composeschema=new mongoose.Schema({
     email:{
        type:String,
        required:true,
     },
     name:{
        type:Array,
        required:true,
     },
    seat:{
        type:Array,
        required:true, 
    },
    
   
},
{timestamps:true});   
 


module.exports=mongoose.model("Ticketsdata",composeschema) 