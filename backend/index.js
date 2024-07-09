const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  const recipientEmail = 'ajithhuggi41@gmail.com'; // Your default email address

  // Create a transporter object using your email service and credentials
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mantubk47@gmail.com',
      pass: 'ltle cizt rrxg odmu',
    },
  });

  // Set up email data
  let mailOptions = {
    from: email,
    to: recipientEmail,
    subject: `Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message. Please try again later.');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
