// /pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // or another SMTP provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO, // your email
            subject: `New message from ${name}`,
            html: `
        <h3>You've got a new message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
        });

        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Email send error:", error);
        return res.status(500).json({ message: "Email failed to send" });
    }
}
