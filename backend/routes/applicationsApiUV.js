const express = require('express')
const router = express.Router()
const ApplicationData = require('../models/applicationsUV')

const multer=require('multer')
// const Storage = multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })
// const upload=multer({
//     storage:Storage
// }).single('applicationdata')

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

router.get('/applicatiodata', async (req, res) => {       // getdata for admin to collect unverified alumni
    try {
        let list = await ApplicationData.find({ approval_status: "approved" })
        res.send(list)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
