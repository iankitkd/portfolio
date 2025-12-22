import nodemailer from "nodemailer";

import { contactEmail } from "@/data";

const { EMAIL_USER, EMAIL_PASS } = process.env;

interface EmailProps {
    name: string;
    email: string;
    message: string;
}

export async function sendEmail({ name, email, message }: EmailProps) {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        const mailOptions = {
            to: contactEmail,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br>${message}</p>`,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unable to send email");
    }
}