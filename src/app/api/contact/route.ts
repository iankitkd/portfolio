import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { contactEmail } from "@/data";

const { EMAIL_USER, EMAIL_PASS} = process.env;

export async function POST(req:Request) {
  const request = await req.json();
  const { name, email, message } = request;

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: "Missing fields" }, {status: 400});
  }

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

    return NextResponse.json({ success: true, message: "Email sent" }, {status: 200});
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, {status: 500});
  }
}
