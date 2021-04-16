const express =require("express");
const dotenv =require("dotenv");
const morgan =require("morgan");
const connectDB= require("./config/connectDB");
const traineesRoute = require("./routes/traineesRoute");
const userRoute=require("./routes/userRoute")
dotenv.config();

const app = express();
//connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/v1/trainees", traineesRoute);
app.use("/api/v1/users", userRoute);

//home route
app.get("/", (req, res) => {
    res.send("<h1>welcome to our trainees API</h1>");
});

const port =process.env.port || 5000
app.listen(port,()=>console.log(`server started ${port}`));