import { NextResponse } from "next/server";

import { sendEmail } from "@/lib/email";

export async function POST(req:Request) {
  const request = await req.json();
  const { name, email, message } = request;

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: "Missing fields" }, {status: 400});
  }

  try {
    await sendEmail({name, email, message});

    return NextResponse.json({ success: true, message: "Email sent" }, {status: 200});
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, {status: 500});
  }
}
