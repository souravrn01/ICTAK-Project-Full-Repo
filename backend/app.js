const express = require('express')
const cors = require('cors')
const logger = require('morgan') // for seeing api calls in terminal
require('./middlewares/mongodb') //to init mongoDB

const app = express();
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(cors()) //to connect frontend and backend without any disturbance
//file upload
const multer = require('multer')

const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cd(null,file,originalname);
    }
})
const upload = multer({
    storage:Storage
}).single('resume_file_upload')

//api setup
const api = require('./routes/api') 
app.use('/api', api)


// Server connection 
var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is connected to ${port}....`)
})