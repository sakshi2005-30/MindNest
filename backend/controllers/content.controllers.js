const Content = require("../models/content.model");
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
  } catch (err) {}
};

const getSharedContentLink = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports={addContent,getContent,deleteContent}