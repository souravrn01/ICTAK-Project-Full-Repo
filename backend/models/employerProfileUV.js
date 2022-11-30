// UNVERIFIED EMPLOYER SCHEMA
const mongoose=require('mongoose')
const schema=mongoose.Schema
const employeSchema= new schema({
    name:String,
    email:String,
    phone:Number,
    company:String,
    password:String
})

let employeData=mongoose.model('Employe_Details',employeSchema)
module.exports=employeData