const express=require("express");
const router=express.Router();

const protect=require("../middleware/auth.middleware");
const {addContent,getContent,deleteContent}=require("../controllers/content.controllers");

router.post("/addContent",protect,addContent);
router.get("/getContent",protect,getContent);
router.delete("/deleteContent/:id",protect,deleteContent);
module.exports=router;