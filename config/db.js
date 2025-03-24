const mongoose = require ("mongoose");
const dotenv = require("dotenv");
dotenv.config()
// mongoose.connect(process.env.MONGODB_URI);



// Mongodb connection
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`✅ MongoDB Connected: ${mongoose.connection.name}`);
    }catch(error){
        console.error("❌ MongoDB Connection Error:", error);
    }
}

// mongoose.connection.on("connected", ()=>{
//     console.log(`Connected to MongoDB ${mongoose.connection.name}`);
    
// });

module.exports = connectDB;