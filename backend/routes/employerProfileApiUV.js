const express=require('express')
const router=express.Router()
const EmployeData=require('../models/employerProfileUV')



router.post('/employesignup',async(req,res)=>{
    try {
        let data={
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    company:req.body.company,
    password:req.body.password
    }
    const employe = new EmployeData(data)
    const saveEmploye = await employe.save()
        res.send(saveEmploye)
    } catch (error) {
        console.log('post error:',error);
    }
})



module.exports=router;
