const jwt=require('jsonwebtoken')

const verifytoken=(req,res,next)=>{
 if(!req.headers.authorization){
    return res.status(401).send('Unauthorized request')
 }
 const token=req.headers.authorization
 if(token===null){
    return res.status(401).send('Unauthorized request')
 }
 jwt.verify(token,'secretkey',(err,payLoad)=>{
    if(err){
        return res.status(401).send('Unauthorized request')
    }
    req.payload=payLoad
    next();
 })
} 

module.exports=verifytoken