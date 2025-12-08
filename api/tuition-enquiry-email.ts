// api/tuition-request-email.js

import nodemailer from "nodemailer";

/**
 * This file runs as a Vercel Serverless Function.
 * It must be in a top-level "api/" folder in your project root.
 * Vercel will automatically detect and deploy it.
 */

export default async function handler(req, res) {
  // Ensure it's a POST request
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  // Parse request body
  const { name, email, pupilName, pupilAge, instrument, location, message } =
    req.body;

  if (!name || !email || !message) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // your Gmail App Password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`, // your Gmail
      to: "steve@stevemcgarviemusic.com", // you receive it here
      replyTo: email, // 👈 user’s email from the form
      subject: `Tuition Enquiry: ${name}`,
      text: `
    You received a new message regarding a tuition enquiry:

    Name: ${name}
    Email: ${email}
    Pupil name (if different): ${pupilName}
    Pupil age: ${pupilAge}
    Instrument: ${instrument}
    Location: ${location}

    Message:
    ${message}
  `,
    });

    // Success response
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({
      success: false,
      message: "Error sending email",
      error: error.message,
    });
  }
}
