
const mongoose = require('mongoose');
const color = require('colors')
const connectmongoDB = async () => {

    try{
        let connect = await mongoose.connect(process.env.MONGO_DB);
        console.log(`we are connect mongodb with Host : ${connect.connection.host}`.bgCyan.black);
    }catch(error){
     console.log(`error`.red)
    }
    
}


module.exports = connectmongoDB;