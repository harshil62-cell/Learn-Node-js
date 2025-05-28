//Lecture-7,8 ,10
//Note that this will be the starting point / main file 
//name it as index.js (good practice)
//To make server we will use  a module named http 
const http=require('http');
const fs=require('fs');
const express=require('express');
const app=express();
app.get('/name',(req,res)=>{
    return res.send(`all about your request ${req.query.name}`)
})
// const myServer=http.createServer((req,res)=>{
//     console.log("New request recieved");
//     console.log(req.headers);
//     const myurl=url.parse(req.url,true)//true means I need query parameters as well
//     console.log("parsed url",myurl);
// //     parsed url Url {
// //   protocol: null,
// //   slashes: null,
// //   auth: null,
// //   host: null,
// //   port: null,
// //   hostname: null,
// //   hash: null,
// //   search: null,
// //   query: null,
// //   pathname: '/favicon.ico',
// //   path: '/favicon.ico',
// //   href: '/favicon.ico'
// // }
//     const log=`${Date.now()} ${req.url}:New request recieved\n`
//     fs.appendFile('log.txt',log,(err,data)=>{
//         res.end("Hello From server");
//     })
    
// });// this is callback function known as request Listener which processes incoming request
// //this callback have two parameters request and response
// const myServer=http.createServer(app);
// myServer.listen(8000,()=>{
//     console.log("Server started");
// })
//To run a server we will require a port number 

app.listen(8000,()=>{
    console.log("server started")
})

