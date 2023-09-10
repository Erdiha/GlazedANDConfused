import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        name,
        email,
        address,
        eventDate,
        eventTime,
        guestCount,
        hearAboutUs,
        eventDescription,
      } = req.body;

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
        from: `"Glazed & Confused" <${process.env.EMAIL_USER}>`,
        to: "minidonutsnyc@gmail.com",
        subject: "Message From Glazed & Confused",
        html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 2rem 0;">
        <div style="max-width: 700px; background-color: white; margin: 0 auto; border-radius: 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); ">
          <div style="width: 100%; background-color: #ff52a2; padding: 20px 0; text-align: center; ">
            <a style="padding:" href="#">
              <img src="https://www.foodtrucksonthemove.com/wp-content/uploads/2021/01/glazed-confused-logo-300x363.jpg" alt="Glazed & Confused Logo" style="width: 80px; border:10px solid #279EFF;box-shadow:0px 0px 10px black;padding:10px;background-color:white;border-radius:1px;  ">
            </a>
          </div>
          <div style="width: 100%; gap: 10px; padding: 2rem 0.5rem; display: grid; justify-content:center">
            <p style="font-weight: 800; font-size: 1.6rem; border-bottom:2px solid #ff52a2">
              Quote Request for Truck Rental
            </p>
            <div style="font-size: 1.2rem; margin: 0.6rem 1rem; font-weight:bold;letter-spacing:0.5px">
              <p><i style='font-weight:normal'>Full Name:</i> ${name}</p>
              <p><i style='font-weight:normal'>Email:</i> ${email}</p>
              <p><i style='font-weight:normal'>Address:</i> ${address}</p>
              <p><i style='font-weight:normal'>Event Date:</i> ${eventDate}</p>
              <p><i style='font-weight:normal'>Event Time:</i> ${eventTime}</p>
              <p><i style='font-weight:normal'>Guest Count:</i> ${guestCount}</p>
              <p><i style='font-weight:normal'>How Did You Hear About Us:</i> ${hearAboutUs}</p>
              <p><i style='font-weight:normal'>Event Description:</i> <i>${eventDescription}</i></p>
            </div>
          </div>
        </div>
      </div>
      
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
