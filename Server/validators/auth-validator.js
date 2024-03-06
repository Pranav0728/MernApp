const {z} = require("zod");

const signupSchema = z.object({
    username:z
    .string({required_error:"Invalid Error"})
    .trim()
    .min(6,{message:"Username should more than 6 characters"})
    .max(225,{message:"Username should less than 225 characters"}),
    email:z
    .string({required_error:"Invalid Error"})
    .trim()
    .email({msg:"invalid email address"})
    .min(6,{message:"email should more than 6 characters"})
    .max(225,{message:"email should less than 225 characters"}),
    phone:z
    .string({required_error:"Invalid Error"})
    .trim()
    .min(10,{message:"phonenumber must be atleast 10 characters"})
    .max(10,{messgae:"Invalid"}),
    password:z
    .string({required_error:"Invalid Error"})
    .trim()
    .min(6,{message:"Username should more than 6 characters"})
    .max(225,{message:"Username should less than 225 characters"}),
})

module.exports = signupSchema