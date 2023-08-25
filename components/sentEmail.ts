// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function SentEmail(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Initialize Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email content
      const mailOptions = {
        from: 'your_email@example.com', // Replace with your sender email address
        to: 'recipient@example.com', // Replace with the recipient email address
        subject: `Message from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
