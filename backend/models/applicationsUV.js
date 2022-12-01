// UNVERIFIED APPLICATIONS SCHEMA
const mongoose=require('mongoose')
const schema=mongoose.Schema

const applicationSchema= new schema({  

    name:String,
    email:String,
    phone:Number,
    resume_file_upload:String,
    profile_link:String,
    approval_status:{
        type: String,
        default: "not approved"
    },

}) 