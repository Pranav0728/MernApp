const errorMiddleware =(err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Backend error";
    const extraDetails = err.extraDetails || "Backend error";

    return res.status(status).json({message,extraDetails});
}

module.exports = errorMiddleware;