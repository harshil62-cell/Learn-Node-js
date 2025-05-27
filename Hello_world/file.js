//lecture-5
const fs=require('fs');//its a built in module in NodeJS
const os=require('os');
console.log(os.cpus().length);// I have 12 cores 
//so I can take my thread size upto max 12-not exactly 
fs.writeFileSync('./test.txt','Hey there!');
//there are two different functions writeFileSync and writeFile 
//the one we used above is synchronised call
//to understand difference between writeFile and writeFileSync we would need to understand blocking and non blocking concept
//covered in next video(Node js architecture)
fs.writeFile('./test1.txt','Hello async',(err)=>{console.error(err)});

//how to read files

const result=fs.readFileSync('./contact.txt',"utf-8");
//console.log("file content ",result);

//readFile does not return result like readFileSync is returning the result and we are storing it in result variable
//below is the working
fs.readFile('./contact.txt',"utf-8",(err,result)=>{
    if(err){
        console.log("Error");
    }else{
        console.log(result);
    }
})

//appending to a file

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());

//we can even copy a file to some other file 

fs.cpSync('./test.txt','./copy.txt');

//to delete a file 

//fs.unlinkSync("./copy.txt");

//to view stats related to a file 

console.log(fs.statSync("./test.txt"));

//how to make a directory
//fs.mkdirSync('my-docs');
//to make files inside file 
fs.mkdirSync('myDocs/a/b',{recursive:true});







