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
const Content=mongoose.model("Content",contentSchema);

const linkSchema=new mongoose.Schema({
    hash:String,
    userId:mongoose.Schema.Types.ObjectId
})
const Link=mongoose.model("Link",linkSchema);
module.exports={Content,Link}