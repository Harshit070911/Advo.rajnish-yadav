import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

import nodemailer from 'nodemailer';

// Basic contact submission route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Log the submission
    console.log('New contact submission:', { name, email, subject });

    // Setup nodemailer transporter
    // To make this work, the user needs to provide EMAIL_USER and EMAIL_PASS in their .env
    // EMAIL_PASS should be an App Password if using Gmail.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'movieskh242@gmail.com', // Target email requested by user
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <h3>New Contact Message from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h4>Message:</h4>
        <p>${message}</p>
      `
    };

    // Only attempt to send if credentials are provided, otherwise just mock it for dev
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to movieskh242@gmail.com');
    } else {
      console.warn('EMAIL_USER and EMAIL_PASS not set in .env. Email was NOT actually sent.');
    }
    

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
