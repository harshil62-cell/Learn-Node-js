//lecture-13 , 14 ,15 , 16
const express=require('express');
let users=require('./MOCK_DATA.json');
const fs=require('fs');
const {connectMongoDb}=require("./connection")
const app=express();
const port=8000;
const userRouter=require("./routes/user");
const{logReqRes}=require('./middlewares/index');
const { log } = require('util');

//db connection
connectMongoDb("mongodb://127.0.0.1:27017/database_name");
//middleware
app.use(logReqRes('log.txt'));
//middleware-plugin
app.use(express.urlencoded({extended:false}));
// What does it do?

//     It parses application/x-www-form-urlencoded request bodies (which is the default format for HTML forms).

//     After parsing, it adds the data to req.body, so you can access it easily.

// What does extended: false mean?

//     false: Uses the Node.js built-in querystring module to parse the data. This means it can only parse simple objects (like strings and arrays).

//     true: Uses the qs library, which allows for nested objects (more complex structures).

//creating custom middlewares

// app.use((req,res,next)=>{
//     console.log("first middleware will go to second middleware");
//     //to pass the request to next middleware
//     req.my_user_name="jai";
//     next();
// })
// app.use((req,res,next)=>{
       
//     return res.json({msg:"Hello from middleWare",previous:`${req.my_user_name}`});
// })
//browsers by default make get request only 
//so to test our other API other than get we use tools like postman 
//Routes
app.use("/user",userRouter);

app.listen(port,()=>console.log(`server started on port: ${port}`));