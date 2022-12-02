// UNVERIFIED APPLICATIONS SCHEMA
const mongoose = require('mongoose')
const schema = mongoose.Schema

const applicationSchema = new schema({

    resume_file_upload:{
        data:Buffer,
        contentType: String
    },
    approval_status: { 
        type: String,
        default: "not approved"
    },
    profile_link: String,
}) 
let applicationData = mongoose.model('Applications',applicationSchema)
module.exports= applicationData
