const express = require('express')
const {handleGetAllUsers,get, getUserById}=require('../controllers/user')

const router = express.Router();
//Routes
//List all users 
// router.get('/', async (req, res) => {
//     res.setHeader("X-myName", "Harshil Vasani");//custom response header
//     //Always add X to custom headers to identify that they are custom headers
//     const allDbUsers = await User.find({});
//     return res.json(allDbUsers);
// })
router.get('/',handleGetAllUsers);
//api sending html (server side rendering)
// router.get('/users',(req,res)=>{
//     const html=`
//     <ul>
//         ${users.map((user)=>{return `<li>${user.first_name}</li>` })}
//     </ul>
//     `
//     res.send(html);
// })

//get specific user with id 
router.get('/:id', getUserById);

router.
    route("/api/users/:id")
    .patch((req, res) => {
        //edit user with id
        const id = Number(req.params.id);
        const body = req.body;
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.first_name = body.first_name ? body.first_name : user.first_name;
        user.last_name = body.last_name ? body.last_name : user.last_name;
        //users.push({user});
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ updated_user: user });
        })
    })
    .delete((req, res) => {
        //delete user with id
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        users = users.filter((user) => user.id != id);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ deleted: user });
        })
    })

//post user
router.post('/', async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.job_title || !body.email || !body.gender) {
        return res.status(400).json({ message: "All fields are required" });
    }
    console.log("body ", body);
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender,
    })
    console.log(result);
    return res.status(201).json({ message: "success" });
    //below we were working with filesystem now we are working with db
    // users.push({...body,id:users.length+1});
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    //     return res.status(201).json({status:"done"});
    // })
})

module.exports = router;

