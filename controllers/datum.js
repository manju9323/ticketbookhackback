const Ticketsdata =require("../models/compose")


//del
const deletemail=async(req,res)=>{
    
    try{  
        let mails=await Ticketsdata.findById(req.params.id);
        if(mails){
     await Ticketsdata.findByIdAndDelete(req.params.id);   
 res.status(200).send(`sucessfully deleted movie ${req.params.id}`)
     }
    else{
        res.status(200).send(`no mail in that id ${req.params.id}`)
    }}
     catch(err){
         res.status(500).send("err") 
 
     }   
 }

 //get
 const getmail=async(req,res)=>{
    try{  
        let  tick= await Ticketsdata.findById(req.params.id);   
    res.status(200).send(tick)
        }
        catch(err){
            res.status(500).send("err") 
    
        }   
    }

//getall
const getmails=async(req,res)=>{

    try{  
        let  tick= await Ticketsdata.find();   
    res.status(200).send(tick)
        }
        catch(err){
            res.status(500).send("err") 
    
        }   
    }
    

module.exports={deletemail,getmail,getmails}