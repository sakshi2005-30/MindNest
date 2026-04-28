const jwt=require('jsonwebtoken');
const protect=async(req,res,next)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(400).json({
                message:"Not Authorized"
            })
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        if(!decode){
            return res.status(400).json({
                message:"Wrong token"
            })
        }
        req.user=decode
        
        next();
    }
    catch(err){
        console.log("Error in authentication",err);
        res.status(500).json({
            message:"Authentication failed"
        })
    }
}
module.exports=protect