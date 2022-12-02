const express = require('express')
const router = express.Router()
const AluminiData = require('../models/alumniProfileUV')




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
router.get('/singlealumni',async(req,res)=>{       //get singledata of alumni
    try{
        let data = await AluminiData.find({email:req.body.email,password:req.body.password})
        res.send(data)
    }catch(error){
        console.log(error)
    }
})

router.get('/aluminisignup/:id', async (req, res) => {
    try {
        let id = req.params.id
        const singleAlumni = await AluminiData.findById(id)
        res.send(singleAlumni)
    } catch (error) {
        console.log(error)
    }
})

router.post('/alumnigeneraldata',async(req,res)=>{ //add Alumni general informations
    try{
        let alumnigeneraldata={
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
        const alumni = new AluminiData(alumnigeneraldata)
        const savealumni = await alumni.save()
        res.send(savealumni)
    }
    catch (error) {
        console.log('post error:', error);
    }
})
router.post('/alumnieducation', async (req, res) => { //for adding education data of alumni
    try {
        let educationdata= {
           qualification: req.body.qualification,
           completion_status: req.body.completion_status,
           main_stream: req.body.main_stream,
           specialization: req.body.specialization,
           university: req.body.university,
           percentage: req.body.percentage,
           year_of_pass: req.body.year_of_pass
        }
        const educations = new AluminiData(educationdata)
        const saveEducation = await educations.save()
        res.send(saveEducation)
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