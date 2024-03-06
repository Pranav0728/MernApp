const Contact = require("../models/contact-model");

const contactForm = async(req,res)=>{
    try {
        
    const response =req.body;
    await Contact.create(response);
    res.status(200).json({message:"Successfull"})
    } catch (error) {
        next(error)
    }
    
}

module.exports = contactForm;
