// VERIFIED ALUMNI PROFILE SCHEMA DESIGN 
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
    qualification:String,
    completion_status:String,
    main_stream:String,
    specialization:String,
    university:String,
    percentage:String,
    year_of_pass:String,
    company:String,
    Designation:String,
    presently_working:Boolean,
    starting_date:Date,
    ending_date:Date,
    current_monthly_salary:Number,
    notice_period:String,
    highest_qualification:String,
    course_started_at_ictak:String,
    batch_details:String,
    placement_status:String
})

let aluminiData=mongoose.model('Alumini_Details',alumniSchema)
module.exports=aluminiData