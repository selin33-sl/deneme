import express, { Request,Response } from "express";
import { router } from "./routes/routes";
const mongoose=require('mongoose')
import dotenv from "dotenv";


dotenv.config();

const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true,
    },
    ()=>{
        console.log("DB connected !!");
    }
);

app.use("/",router)

app.listen(process.env.PORT || 5000,() =>{
    console.log("Server is rocking at http://localhost:5000/")
})