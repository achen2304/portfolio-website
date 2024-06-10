// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Add this line

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail'
  auth: {
    user: process.env.EMAIL, // Use environment variables
    pass: process.env.EMAIL_PASSWORD // Use environment variables
  }
});

// Routes
app.post('/contact', (req, res) => {
  const { Name, Email, Message } = req.body;

  const mailOptions = {
    from: Email,
    to: process.env.EMAIL, // Use environment variable
    subject: 'New Contact Form Submission',
    text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Form submission successful!');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
