//lecture-13
const express=require('express');
const users=require('./MOCK_DATA.json');
const app=express();
const port=8000;

//Routes
//List all users 
app.get('/api/users',(req,res)=>{
    return res.json(users);
})

//api sending html (server side rendering)
app.get('/users',(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>{return `<li>${user.first_name}</li>` })}
    </ul>
    `
    res.send(html);
})

//get specific user with id 
app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);//as this will be a string but we want number so convert it to number
    const user=users.find((user)=>user.id===id);
    return res.json(user);
})

//browsers by default make get request only 
//so to test our other API other than get we use tools like postman 



app.listen(port,()=>console.log(`server started on port: ${port}`));