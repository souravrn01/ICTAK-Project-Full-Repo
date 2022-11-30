const nodemailer = require('nodemailer');
const express  = require('express')
const router = express.Router()


router.post('/alumnimail', async(req,res)=>{

  console.log(req.body.data.feedback, req.body.email, req.body.name )
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sherinthomas17011997@gmail.com',
      pass: 'Jobportal@1' // naturally, replace both with your real credentials or an application-specific password wdrwsckawblzoqxe
    }
  });
  
  const mailOptions = {
    from: 'souravg00gle@gmail.com',
    to: req.body.email,
    subject: 'ICATK Job Portal Update',
    text: ` This is very important mail from admin 
            Dear ${req.body.name}
            ${req.body.data.feedback}
            from ICTAK admin`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

   res.send('successfully mailed')

})

module.exports = router
