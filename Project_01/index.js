//lecture-13
const express=require('express');
let users=require('./MOCK_DATA.json');
const fs=require('fs');
const app=express();
const port=8000;

//middleware-plugin
app.use(express.urlencoded({extended:false}));

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

//post user
app.post('/api/user',(req,res)=>{
    const body=req.body;
    console.log("body ",body);
    users.push({...body,id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"done"});
    })
})
//homework complete below API
app.
    route("/api/users/:id")
    .patch((req,res)=>{
        //edit user with id
        const id=Number(req.params.id);
        const body=req.body;
        const user=users.find((user)=>user.id===id);
        if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
        user.first_name=body.first_name?body.first_name:user.first_name;
        user.last_name=body.last_name?body.last_name:user.last_name;
        //users.push({user});
        fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
            return res.json({updated_user:user});
        })
    })
    .delete((req,res)=>{
        //delete user with id
        const id=Number(req.params.id);
        const user=users.find((user)=>user.id===id);
        if(!user){
            return res.status(404).json({error:"User not found"});
        }
        users=users.filter((user)=>user.id!=id);
        fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
            return res.json({deleted:user});
        })
    })

//browsers by default make get request only 
//so to test our other API other than get we use tools like postman 



app.listen(port,()=>console.log(`server started on port: ${port}`));