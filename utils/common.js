const nodemailer = require("nodemailer");
require('dotenv').config();


exports.sendMail = async (subject, body, receiver) => {

    try {
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD // generated ethereal password
            },
        });

        // send mail with defined transport object
        await transporter.sendMail({
            from: '"BEN 👻" <benidevoo@gmail.com>', // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            text: body, // plain text body
            html: `<b>${body}</b>`, // html body
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
  
}


