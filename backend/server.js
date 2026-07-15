import express from "express";
import cors from "cors";
import  dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config()

const app = express();

connectDB()


// Middleware
app.use(cors())
app.use(express.json())


//Test API
app.get("/" , (req, res) =>{
    res.send("indeed clone Backend Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/jobs", jobRoutes);



//Server Start 
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})