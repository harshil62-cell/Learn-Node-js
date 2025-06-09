const fs=require('fs');

function logReqRes(fileName){
    return (req,res,next)=>{
        
    fs.appendFile(fileName,`${Date.now()}:${req.method}:${req.path}\n`,(err)=>{
        if(err){
            console.error("error writing to log file",err);
        }
    });
    next();

    }
}

module.exports={
    logReqRes
}