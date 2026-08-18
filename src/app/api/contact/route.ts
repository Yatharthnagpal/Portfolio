import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required fields." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || "nagpalyatharth99@gmail.com";
    const rawPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;
    const smtpPass = rawPass ? rawPass.replace(/\s+/g, "") : undefined;

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name || "Portfolio Visitor"}" <${smtpUser}>`,
      to: "nagpalyatharth99@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name || email}`,
      text: `Name: ${name || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background-color: #0a0f0a; color: #f8fafc; border-radius: 12px; border: 1px solid #22c55e;">
          <h2 style="color: #4ade80; margin-top: 0;">New Portfolio Inquiry</h2>
          <p style="margin: 6px 0;"><strong>Name:</strong> ${name || "N/A"}</p>
          <p style="margin: 6px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #4ade80;">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #16a34a; margin: 16px 0;" />
          <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
          <div style="background-color: #111811; padding: 16px; border-radius: 8px; border: 1px solid #22c55e40; color: #e2e8f0; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    };

    if (smtpPass) {
      await transporter.sendMail(mailOptions);
    } else {
      // Fallback to web relay so emails reach nagpalyatharth99@gmail.com even without .env.local
      const relayRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0da15c2d-9e12-4f36-939d-7f551c911b33",
          subject: `Portfolio Message from ${name || email}`,
          from_name: name || "Portfolio Visitor",
          email: email,
          message: message,
        }),
      });
      if (!relayRes.ok) {
        throw new Error("Relay service returned non-OK response.");
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully via Nodemailer!",
    });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: "Failed to dispatch email via Nodemailer. Please check credentials or contact directly." },
      { status: 500 }
    );
  }
}
