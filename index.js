const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
    })
    .catch((error) => {
        console.log(error)
    })

app.get('/send',(req,res) => {

let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
    port: 578,
	auth: {
		user: 'coder99sanjar@gmail.com',
		pass: 'nfpoppgvsoqlrthd'
	}
});

let mailDetails = {
      from: ' "Verified your email" <coder99sanjar@gmail.com>',
      to: newUser.email,
      subject: 'code with sid -verified your email',
      text: 'Verified your email!',
      html: `<h2> ${newUser.name}! Thanks for registering on our site</h2>
              <h4>Please verify your email yo continue ...</h4>
              <a href="http://${req.headers.host}/user/login?token=${newUser.token}">Verified Your Email </a>
      `
    };
    
mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully')
        console.log(data);
	}
   
});
res.status(200).json("Sending email")
})






