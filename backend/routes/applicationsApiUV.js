const express = require('express')
const router = express.Router()
const ApplicationData = require('../models/applicationsUV')
const multer=require('multer')


//store data 
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    },
})

const upload = multer({
    storage: Storage
}).single('resume')




router.post('/upload',async(req,res)=>{ 
    try{
        let applicationdata={
            profile_link:req.body.profile_link,
            resume_file_upload: req.body.resume_file_upload
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
