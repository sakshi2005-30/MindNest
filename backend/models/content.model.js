const mongoose=require("mongoose");
const contentSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    link:String,
    description:{
        type:String,
        default:""
    },
    contentType:{
        type:String,
        enum:["Youtube","Twitter","URL"],
        default:"URL"
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})
module.exports=mongoose.model("Content",contentSchema);