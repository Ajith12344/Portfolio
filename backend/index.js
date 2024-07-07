const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my server'); // You can customize this response
});

// POST endpoint for handling contact form submissions
app.post('/send-email', (req, res) => {
  const { name, message, recipientEmail } = req.body;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mantubk47@gmail.com', // Your Gmail email address
      pass: 'ltle cizt rrxg odmu', // Your Gmail password or application-specific password
    },
  });

  // Email message details
  let mailOptions = {
    from: 'mantubk47@gmail.com', // Sender address
    to: recipientEmail, // Dynamic recipient email address from form input
    subject: 'New Message from Portfolio Contact Form', // Subject line
    html: `
      <p>You have a new message from your portfolio contact form:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending message');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
