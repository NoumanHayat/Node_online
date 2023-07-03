const nodemailer = require('nodemailer');
const fs = require('fs');

const sendEmail = async options => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'pdfconverterappmail@gmail.com',
      pass: 'hwddlwofuoiufpjm' // naturally, replace both with your real credentials or an application-specific password
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'pdfconverterappmail@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
    attachments: [
      {
        filename: options.filename,
        path: options.path
      }
    ]
    // html:
  };

  // 3) Actually send the email
  // await transporter.sendMail(mailOptions);
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      try {
        fs.unlinkSync(options.path);
        console.log('Delete File successfully.');
      } catch (errors) {
        console.log(error);
      }
    } else {
      console.log(`Email sent: ${info.response}`);
      try {
        fs.unlinkSync(options.path);
        console.log('Delete File successfully.');
      } catch (error) {
        console.log(error);
      }
      return info.response;
    }
  });

};

module.exports = sendEmail;
