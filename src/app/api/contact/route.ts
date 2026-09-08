import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const isSmtpConfigured =
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS &&
  process.env.SMTP_USER !== 'your-email@example.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

    const emailBody = [
      `Name:         ${name}`,
      `Email:        ${email}`,
      `Phone:        ${phone || 'Not provided'}`,
      `Subject:      ${subject || 'general'}`,
      `Message:      ${message}`,
      `Submitted At: ${submittedAt}`,
    ].join('\n');

    if (isSmtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: 'info@curanova.ai',
        replyTo: email,
        subject: `Contact Form: ${subject || 'General Inquiry'} — GenExcel`,
        text: emailBody,
      });
    } else {
      console.log('--- Contact Form Submission (SMTP not configured) ---');
      console.log(emailBody);
      console.log('------------------------------------------------------');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
