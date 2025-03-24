const express = require ("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const fruitRouter = require("./routes/fruitRouter.js")

dotenv.config()
const app = express();
const PORT = 3000;
// connect to Mongo
connectDB();

// middleware parses incoming request bodies
app.use(express.urlencoded({ extended: false }));




app.use("/", fruitRouter);



// app.get('/', async (req,res)=>{
//     res.render('index.ejs')
// });




app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
    
})

