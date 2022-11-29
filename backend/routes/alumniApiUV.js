const express=require('express')
const router=express.Router()
const AluminiData=require('../models/alumniProfileUV') 




router.post('/aluminisignup', async(req, res)=>{  
    try {
        let data = {
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            highest_qualification:req.body.highest_qualification,
            course_started_at_ictak:req.body.course_started_at_ictak,
            batch_details:req.body.batch_details,
            placement_status:req.body.placement_status,
            company_name:req.body.company_name,
            password:req.body.password
        }
        const alumini = new AluminiData(data)
        const saveAlumini = await alumini.save()
        res.send(saveAlumini)
    } catch (error) {
        console.log('post error:',error);
    }
})

router.post('/alumnieducation',async(req,res)=>{
    try{
        let educationdata = {
            education:req.body.education
        }
        const alumni = new AluminiData(educationdata)
        const saveEducation = await alumni.save()
        res.send(saveEducation)
    }
    catch(error){
        console.log('post error:',error); 
    }
})
module.exports=router;