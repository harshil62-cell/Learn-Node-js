//const math=require('./math'); // ./ stands for current directory
//to directly use we can even destructure it
const {add,sub}=require('./math');
//Lecture -3,4
console.log("Hello Harshil!");
//console.log(window);//note that window is only defined in browser and not defined here
//since while using Node js we will make server/backend we wont need features for manipulating UI and hence
//they are not included here
//alert is also  not defined here
//to start a project we will need to type npm init 
//it will create a template for us 
console.log(sub(3,2));

//there are many built in packages also available for use in Node js 
//for eg there is a package named http through which we can create web servers 
//a module named fs is used for file handling 

