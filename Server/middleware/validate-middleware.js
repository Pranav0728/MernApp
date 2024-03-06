
const validate =(schema)=>async(req,res,next)=>{
    try {
        console.log(req.body)
        const parseBody = await schema.parseAsync(req.body);
        console.log(req.body)
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 400;
        const message = err.errors[0].message;
        
        const error ={
            status,
            message
        }
        next(error)
    }
}
module.exports = validate;