const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

email='admin@gmail.com';
password='Admin@123';

router.post('/loginadmin',(req,res)=>{
    let userdata=req.body
    if(!email){
        res.status(401).send('Invalid Username')
    }
    else if(password!==userdata.password){
        res.status(401).send('Invalid Password')
    }
    else{
        let payload={subject:email+password}
        let token = jwt.sign(payload,'secretkey')
        res.status(200).send(token)
    }
})

module.exports = router