require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URL;

const connectDB = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection successful with DB");
    } catch (error) {
        console.error(error.message);
        process.exit(0)
    }
}

module.exports = connectDB;