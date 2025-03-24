const express = require ("express");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./config/db.js");
const fruitRouter = require("./routes/fruitRouter.js")
const userRouter = require("./routes/UserRouter.js")

dotenv.config()
const app = express();
const PORT = 3000;
// connect to Mongo
connectDB();

// middleware parses incoming request bodies
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); 
app.use(morgan("dev")); 
app.use(express.static(path.join(__dirname, "public")));



app.use("/", fruitRouter);
app.use("/", userRouter);



// app.get('/', async (req,res)=>{
//     res.render('index.ejs')
// });




app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
    
})

