const User=require("../models/user.models");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const createToken=(id)=>{
    return jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:"3d"});
}
const signup=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                message:"All fields are required"});
        }
         if (password.length < 6) {
           return res.status(400).json({
             message: "Password must be at least 6 characters",
           });
         }
        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                message:"User already exists.Please login!"})
        }
        
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            email,
            password:hashedPassword,
            username
        })
        const token=createToken(user._id);
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });
        res.status(201).json({
          message: "User registered successfully",
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
          },
        });

    }
    catch(err){
        console.log("Error in signup",err);
        res.status(500).json({
            message:"Server error"
        });
    }
}
const signin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"All fields are required"
            });
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User doesn't exists.Please signup!"
            })
        }
        const compare=await bcrypt.compare(password,user.password);
        if(!compare){
            return res.status(400).json({
                message:"Incorrect credentials"
            })
        }
        const token=createToken(user._id);
         res.cookie("token", token, {
           httpOnly: true,
           secure: process.env.NODE_ENV === "production",
           sameSite: "lax",
         });
        res.status(200).json({
          message: "Login successful",
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
          },
        });


    }
    catch(err){
        console.log("Error in signin", err);
        res.status(500).json({
          message: "Server error",
        });
    }
}
const logout=async(req,res)=>{
    res.clearCookie("token");
    res.json({
        message:"Logged out successfully"
    })
}
const getMe=async(req,res)=>{
    try{
        const id=req.user.id;
      
        const user=await User.findOne({_id:id}).select(
            "-password"
        );
        res.status(200).json({
            user
        })
    }
    catch(err){
        console.log("Error in getting the current user",err);
        res.status(500).json({
            message:"Server error"
        })
    }
}
module.exports={signup,signin,logout,getMe};