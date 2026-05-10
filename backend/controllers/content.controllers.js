const{ Content,Link} = require("../models/content.model");

const User=require("../models/user.models")
const random=require("randomstring");
const addContent = async (req, res) => {
  try {
    const {title,link,description,contentType}=req.body;
    const userId=req.user.id

    if(!title || !link){
        return res.status(400).json("Title or Link is missing");
    }
    const content=await Content.create({
        title,
        link,description,contentType,userId
    })
    res.status(201).json(content);
  }
   catch (err) {
    console.log("Error in creating content",err);
    res.status(500).json({
        message:"Server error"
    })
   }
};

const getContent = async (req, res) => {
    
  try {

    const userId=req.user.id;
   
    const content=await Content.find({userId});
    res.status(200).json({data:content});
  } 
  catch (err) {
      console.log("Error in getting content", err);
      res.status(500).json({
        message: "Server error",
      });   
   }
  
};
const deleteContent = async (req, res) => {
  try {
    const contentId=req.params.id;
    const content=await Content.findByIdAndDelete(contentId);
    res.json(content)
  } catch (err) {
      console.log("Error in deleting content content", err);
      res.status(500).json({
        message: "Server error",
      });
  }
};

const shareContentLink = async (req, res) => {
  try {
    const {share}=req.body;
    if(share){
      const existingLink=await Link.findOne({userId:req.user.id});

      if(existingLink){
        return res.json({
          hash:existingLink.hash
        })
      }

      const hash=random.generate(10);
      const createLink=await Link.create({
        hash,
        userId:req.user.id
      })
      res.status(201).json({
        hash
      })
    }
    else{
      await Link.deleteOne({userId:req.user.id});
      res.json({
        message:"Removed Link"
      })
    }
  } 
  catch (err) {
    console.log("error in creating share link",err);
    res.json({
      message:"Server error"
    })
  }
};

const getSharedContentLink = async (req, res) => {
  try {
    const hash=req.params.shareLink;
    const link=await Link.findOne({hash});
    if(!link){
      return res.status(404).json({
        message:"Invalid share link"
      })
    }
    const content=await Content.find({userId:link.userId})
    const user=await User.findOne({_id:link.userId});
    if(!user){
      return res.status(400).json({
        message:"User not found"
      })
    }
    res.status(200).json({
      username:user.username,
      content
    })

  } catch (err) {
     console.log("error in creating share link", err);
     res.json({
       message: "Server error",
     });
  }
};

module.exports={addContent,getContent,deleteContent,shareContentLink,getSharedContentLink}