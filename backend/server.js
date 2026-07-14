import express from "express";
import cors from "cors";
import  dotenv from "dotenv";
import connectDB from "./config/db.js";

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


//Server Start 
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})