//MASTER API

const express = require('express')
const router = express.Router()

// below declare all required api
const verifiedJobs = require('./jobApi')


//use api
router.use('/verifiedjobs',verifiedJobs)
