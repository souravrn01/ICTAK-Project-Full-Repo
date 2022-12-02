const express = require('express')
const router = express.Router()
const ApplicationData = require('../models/applicationsUV')


router.post('/upload',async(req,res)=>{
    try{
        let applicationdata={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            profile_link:req.body.profile_link,
            resume_file_upload:{
                data:req.file.filename,
                contentType:'file/pdf'
            }
        }
        const application = new ApplicationData(applicationdata)
        const saveapplication = await application.save()
        res.send(saveapplication)
        
    }catch (error) {
        console.log('post error:',error);
    }
   
})


module.exports = router;
