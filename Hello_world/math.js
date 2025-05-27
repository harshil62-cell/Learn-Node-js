// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

//module.exports=add; - this wont work when we want to export multiple functions

// module.exports={
//     add,
//     sub,
// }

//there is another way to export as well

exports.add=(a,b)=>a+b;
exports.sub=(a,b)=>a-b;
//module.exports is prefered way of exporting 





