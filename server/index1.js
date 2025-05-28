const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    return res.send("Hello to our Home Page");
})

app.get('/about',(req,res)=>{
    return res.send(`All about your request ${req}`);
})