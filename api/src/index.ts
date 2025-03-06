import express from "express";
import {connect} from "../config/dbConn.js";
const app = express();
const PORT = 3000;

connect();
app.get('/user/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(200).json({
        message: "get request received successfully!"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})