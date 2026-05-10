const express=require("express");
const router=express.Router();

const protect=require("../middleware/auth.middleware");
const {
  addContent,
  getContent,
  deleteContent,
  shareContentLink,
  getSharedContentLink,
} = require("../controllers/content.controllers");

router.post("/content",protect,addContent);
router.get("/content",protect,getContent);
router.delete("/content/:id",protect,deleteContent);
router.post("/brain/share",protect,shareContentLink);
router.get("/brain/:shareLink",getSharedContentLink);
module.exports=router;