const nodemailer = require('nodemailer');
const createError = require('http-errors');

const { GOOGLE_PASS } = process.env;

exports.getEmail = async (req, res) => {
  const { emailAddress } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.google.com',
    port: 465,
    secure: false,
    auth: {
      user: 'skinner.vova@gmail.com',
      pass: GOOGLE_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  const mailData = {
    from: 'skinner.vova@gmail.com',
    to: 'vladimir.yevseev@gmail.com ',
    subject: 'Email subscription',
    text: `You have new subscriber: ${emailAddress}`,
  };

  transporter.sendMail(mailData, (error) => {
    if (error) throw createError(500, error.message);
    res.status(200).end();
  });
};
