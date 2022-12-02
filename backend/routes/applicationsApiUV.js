const express = require('express')
const router = express.Router()
const ApplicationData = require('../models/applicationsUV')

//file upload
const multer = require('multer')
const { route } = require('./nodemailerApi')

const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})
const upload = multer({
    storage:Storage
}).single('resume_file_upload')

//stora data 

router.post('/upload',async(req,res)=>{
    try{
        let applicationdata={
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
