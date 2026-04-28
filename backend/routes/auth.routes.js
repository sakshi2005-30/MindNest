const express=require("express");
const router=express.Router();
const {signup,signin,logout,getMe}=require("../controllers/auth.controllers");
const protect=require("../middleware/auth.middleware")
router.post("/signup",signup);
router.post("/signin",signin);
router.post("/logout",logout);
router.get("/me",protect,getMe);
module.exports=router;