const bcrypt = require("bcryptjs");
const User = require("../models/user-model");

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        // Check if the user already exists
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(409).json({ message: "User already exists" });
            // 409 status code indicates conflict, as the resource can't be created due to a conflict with an existing resource.
        }
        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            username,
            email,
            phone,
            password: hashPassword
        });

        // Generate token for the new user
        const token = await newUser.generateToken();

        // Respond with the created user data and token
        res.status(201).json({ user:"Successfull", token: token , UserId:newUser._id.toString()});
        // 201 status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
    } catch (error) {
        // Handle errors
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
        // 500 status code indicates an internal server error.
    }
}

const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({ email: email });
        if(!userExist){
            return res.send(400).json({message:"User not Exist"});
        };
        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(201).json({ msg:"Successfull", token: await userExist.generateToken() , UserId:userExist._id.toString()});
        }
        else{
            res.status(401).json({msg:"Invalid email or password"});
        }
        
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { register, login };
