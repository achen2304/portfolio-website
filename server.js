// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config(); 

// Log the environment variables to ensure they are loaded correctly
console.log('Email:', process.env.EMAIL);
console.log('Email Password:', process.env.EMAIL_PASSWORD);

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.EMAIL_PASSWORD 
  }
});

// Root route to test server
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Contact route to handle form submissions
app.post('/contact', (req, res) => {
  const { Name, Email, Message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL, 
    to: process.env.EMAIL,   
    subject: 'New Contact Form Submission',
    text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
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
