const express = require('express')
const router = express.Router()
const AluminiData = require('../models/applicationUV')
const { route } = require('./nodemailerApi')

router.post('/upload',async(req,res)=>{
    try{
        let applicationdata={
            name:req.body.name,

        }
        
    }catch (error) {
        console.log('post error:',error);
    }
   
})






module.exports = router;
