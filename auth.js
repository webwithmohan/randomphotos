const auth=(req,res,next) => {
    const {password}=req.body;
    if(password !== "7989"){
         return res.status(404).json({
            message:"UnAuthorised"
           
        })
    }
    next()

}
module.exports=auth;