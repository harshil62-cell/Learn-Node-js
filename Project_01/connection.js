const mongoose=require('mongoose');

//connection with db this returns a promise

async function connectMongoDb(url){
    return mongoose.connect(url);
}

module.exports={
    connectMongoDb,
};