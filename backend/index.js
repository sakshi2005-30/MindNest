require("dotenv").config();
const express=require("express");
const app=express();
const connectToDB=require("./config/db")
const cookieParser=require("cookie-parser")
const authRoutes=require("./routes/auth.routes")
const cors=require("cors");
const PORT=process.env.PORT;
connectToDB()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})