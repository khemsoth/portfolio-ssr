import express from 'express'
import nodemailer from 'nodemailer'

require('dotenv').config()

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
  const mailOpts = {
    to: process.env.EMAIL_USER,
    from: process.env.EMAIL_USER,
    subject: `Message from Portfolio`,
    text: `
      Name: ${req.body.name}
      Email: ${req.body.email}
      Message: ${req.body.message}
    `
  }
  transporter.sendMail(mailOpts, function(err, info) {
    if(err) console.log(`errorrrrr: ${err}`)
    else console.log(info)
  })  

})
module.exports = {
  path: '/api/contact', 
  handler: app
}
