const express = require("express");
const app = express();
const cors = require("cors")
const authRouter =require("./router/auth-router");
const formRouter = require("./router/contact-router")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const corsOption ={
    origin : "http://localhost:5173",
    methods : "GET,POST,DELETE,PATCH,HEAD",
    Credential:true
}

app.use(cors(corsOption))
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/form",formRouter);
const PORT = 5000;

app.use(errorMiddleware);
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running")
    })
})