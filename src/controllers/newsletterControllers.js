const nodemailer = require('nodemailer');
const createError = require('http-errors');

exports.getEmail = async (req, res) => {
  const { emailAddress } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'skinner.vova@gmail.com',
      pass: 'czevnletifzmoyqm',
    },
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