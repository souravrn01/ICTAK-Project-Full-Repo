//MASTER API

const express = require('express')
const router = express.Router()

// below declare all required api
const mail = require('./nodemailerApi')
const verifiedJobs = require('./jobApi')
// const Alumini=require('./alumniApi')
const alumniUV = require('./alumniApiUV')


//use api
router.use('/nodemailer',mail)
router.use('/verifiedjobs',verifiedJobs)
// router.use('/Alumini',Alumini)
router.use('/alumniuv',alumniUV)





module.exports = router;
