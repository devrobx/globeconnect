const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport')



const auth = {
    auth: {
        api_key: '',
        domain: 'sandbox0169db9e7cb044daaa11124561fb0ac2.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailgun(auth))


const mailOptions = {
    from: 'robert@gmail.com',
    to: 'robertmagomero@gmail.com',
    subject: 'Testing',
    text: 'hi there'

}

transporter.sendMail(mailOptions, (err, data) => {

    if (err) {
        console.log({
            error: err.message
        })
    } else {
        console.log('Message Sent!')
    }

})