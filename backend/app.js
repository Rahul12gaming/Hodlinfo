import express from 'express';
import { Database } from './db/db.js';
import { data } from './data.js';
import cors from 'cors'
const app=express();

Database();
app.use(cors());
app.get('/data',(req,res)=>{
    res.json({
        data
    })
})
app.listen('3000',function(){
    console.log("Server Started");
    
})
