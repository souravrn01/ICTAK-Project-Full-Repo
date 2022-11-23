const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Alumni_details= new Schema({

    name: {
        type:String,
        require:true
    },
    
})
const AlumniData = mongoose.models('alumni',Alumni_details)
module.exports = AlumniData