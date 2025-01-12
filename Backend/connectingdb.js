const mongoose  = require("mongoose"); 

// MurendeniUakona980309
// mongodb+srv://tofhatwa:MurendeniUakona980309@transactiondb.jms4b.mongodb.net/?retryWrites=true&w=majority&appName=transactiondb

// const uri = "mongodb+srv://tofhatwa:MurendeniUakona980309@transactiondb.jms4b.mongodb.net/?retryWrites=true&w=majority&appName=transactiondb"
// const dbName = "transactiondb"; 

const dbconnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION)
        console.log('connected to Mongo datab');
    } catch (error) {
        console.log("failed to connect", error)
    }
}


module.exports = dbconnection;
