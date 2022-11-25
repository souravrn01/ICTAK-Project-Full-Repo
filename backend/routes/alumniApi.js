const express=require('express')
const router=express.Router()
const AluminiData=require('../models/alumniProfile') 




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
            company:req.body.company
        }
        const alumini = new AluminiData(data)
        const saveAlumini = await alumini.save()
        res.send(saveAlumini)
    } catch (error) {
        console.log('post error:',error);
    }
})
module.exports=router