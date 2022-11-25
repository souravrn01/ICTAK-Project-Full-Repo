//MASTER API

const express = require('express')
const router = express.Router()

// below declare all required api
const verifiedJobs = require('./jobApi')
const Alumini=require('./alumniApi')


//use api
router.use('/verifiedjobs',verifiedJobs)
router.use('/Alumini',Alumini)
module.exports = router;
