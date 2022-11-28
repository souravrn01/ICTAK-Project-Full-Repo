// UNVERIFIED ALUMNI PROFILE SCHEMA DESIGN 
const mongoose=require('mongoose')
const schema=mongoose.Schema

const alumniSchema= new schema({   
    name:String,
    email:String,
    phone:Number,
    gender:String,
    date_of_birth:Date,
    marital_status:String,
    permanent_address:String,
    alternate_phone_number:Number,
    pincode:Number,
    district:String,
    state:String,
    country:String,
    education : {
        qualification : {

            type:String
        },
        completion_status : {
            type:String
        },
        main_stream : {
            type:String 
        },
        specialization :{
            type:String
        },
        university : {
            type:String
        },
        percentage : {
            type:Number
        },
        year_of_pass : {
            type:Number
        }
    },
    experience :{
        company:String,
        Designation:String,
        presently_working:String,
        starting_date:Date,
        ending_date:Date,
        current_monthly_salary:Number,
        notice_period:Number
    },
   
    highest_qualification:String,
    course_started_at_ictak:String,
    batch_details:String,
    placement_status:String
})

let aluminiData=mongoose.model('Alumini_Details',alumniSchema)
module.exports=aluminiData