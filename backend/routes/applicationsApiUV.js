const express = require('express')
const router = express.Router()
const ApplicationData = require('../models/applicationsUV')



//stora data 

router.post('/upload',async(req,res)=>{
    try{
        let applicationdata={
            resume_file_upload:req.body.resume_file_upload,
            profile_link:req.body.profile_link
           
            }
            const application = new ApplicationData(applicationdata)
        const saveapplication = await application.save()
        res.send(saveapplication)
        }
        catch (error) {
        console.log('post error:',error);
    }
   
})



module.exports = router;
