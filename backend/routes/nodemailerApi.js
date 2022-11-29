const nodemailer = require('nodemailer');
const express  = require('express')
const router = express.Router()


router.post('/alumnimail', async(req,res)=>{

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'souravg00gle@gmail.com',
      pass: 'wdrwsckawblzoqxe' // naturally, replace both with your real credentials or an application-specific password
    }
  });
  
  const mailOptions = {
    from: 'souravg00gle@gmail.com',
    to: 'souravrnambiar3369@yahoo.com',
    subject: 'ICATK Job Portal Update',
    text: ` This is very important mail from admin
            ${req.body.feedback}
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
