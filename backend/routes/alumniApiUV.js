const express = require('express')
const router = express.Router()
const AluminiData = require('../models/alumniProfileUV')
const multer=require('multer')






router.post('/aluminisignup', async (req, res) => {
    try {
        let data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            highest_qualification: req.body.highest_qualification,
            course_started_at_ictak: req.body.course_started_at_ictak,
            batch_details: req.body.batch_details,
            placement_status: req.body.placement_status,
            company_name: req.body.company_name,
            password: req.body.password,
        }
        const alumini = new AluminiData(data)
        const saveAlumini = await alumini.save()
        res.send(saveAlumini)
    } catch (error) {
        console.log('post error:', error);
    }
})

router.get('/aluminilist', async (req, res) => {
    try {
        let list = await AluminiData.find()
        res.send(list)
    } catch (error) {
        console.log(error)
    }
})

router.get('/aluminis', async (req, res) => {       // getdata for admin to collect unverified alumni
    try {
        let list = await AluminiData.find({ approval_status: "not approved" })
        res.send(list)
    } catch (error) {
        console.log(error)
    }
})
router.post('/singlealumni',async(req,res)=>{       //get singledata of alumni
    console.log(req.body) 

    try{
        let data = await AluminiData.find({email:req.body.email,password:req.body.password,})
        res.send(data)
    }catch(error){
        console.log(error)
    }
})
//TODO: get single data from db  
router.get('/alumni/:id',(req,res)=>{
    try{
        AluminiData.findById({"_id":req.params.id}).then(function(data){
            res.send(data);
        })
    }
    catch(error){
        console.log(error);
    } 
})

router.put('/generaldata',async(req,res)=>{ //update one alumni general information
    try{
        console.log(req.body)
        let id = req.body._id
        let generaldata = {
            gender:req.body.gender,
            date_of_birth:req.body.date_of_birth,
            marital_status:req.body.marital_status,
            permanent_address:req.body.permanent_address,
            alternate_phone_number:req.body.alternate_phone_number,
            pincode:req.body.pincode,
            district:req.body.district,
            state:req.body.state,
            country:req.body.country,
        }
        let generaldatas = {$set:generaldata}
        let generaldataupdate= await AluminiData.findByIdAndUpdate({"_id":id},generaldatas,{new:true})
        res.send(generaldataupdate)
    }
    catch(error){
        console.log('update error : ',error)
    }
})


router.put('/alumnieducation', async (req, res) => { //for update education data of alumni
    try {
         console.log(req.body.data, req.body.id)
        let id = req.body.id
        let educationdata= {
            education:{
           qualification: req.body.data.qualification,
           completion_status: req.body.data.completion_status,
           main_stream: req.body.data.main_stream,
           specialization: req.body.data.specialization,
           university: req.body.data.university,
           percentage: req.body.data.percentage,
           year_of_pass: req.body.data.year_of_pass
            }
        }
        let educationdatas={$set:educationdata}
        let education = await AluminiData.findByIdAndUpdate({"_id":id},educationdatas,{new:true})
        res.send(education)
       }
       catch (error) {
       console.log('post error:', error);
}
})


router.put('/alumniexperience',async (req,res)=>{ //for update experience data of alumni
    try{
        console.log(req.body, req.body.id)
        let id = req.body.id
        let experiencedata={
            experience:{
                company:req.body.data.company,
                Designation:req.body.data.Designation,
                presently_working:req.body.data.presently_working,
                starting_date:req.body.data.starting_date,
                ending_date:req.body.data.ending_date,
                current_monthly_salary:req.body.data.current_monthly_salary,
                notice_period:req.body.data.notice_period
            }
        }
        let experiencedatas = {$set:experiencedata}
        let experience= await AluminiData.findByIdAndUpdate({"_id":id},experiencedatas,{new:true})
        res.send(experience)
    }
    catch (error) {
        console.log('post error:', error);
 }
})

router.put('/onealumni', async (req, res) => {    // for admin to get one alumni to verify
    try {

        console.log(req.body)
        let id = req.body._id
        let update = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            highest_qualification: req.body.highest_qualification,
            course_started_at_ictak: req.body.course_started_at_ictak,
            batch_details: req.body.batch_details,
            placement_status: req.body.placement_status,
            company_name: req.body.company_name,
            approval_status: req.body.approval_status,
            password: req.body.password
        }
        let updates = { $set: update }
        let verifiedAlumni = await AluminiData.findByIdAndUpdate({ "_id": id }, updates, { new: true })
        res.send(verifiedAlumni)

    } catch (error) {
        console.log('update error:', error);
    }
})

router.delete('/deletealumni/:id', async (req, res) => {        // for admin to delete alumni
    try {

        let id = req.params.id
        let data = await AluminiData.findByIdAndDelete(id)
        res.send(data)

    } catch (error) {
        console.log(error);
    }
})




module.exports = router;