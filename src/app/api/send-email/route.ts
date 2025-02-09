import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';
import { schema } from '@/schema/mail';
// Validate SendGrid API key
if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not set in environment variables');
}
// Validate email addresses
if (!process.env.RECIPIENT_EMAIL) {
    console.error('RECIPIENT_EMAIL is not set in environment variables');
}
if (!process.env.SENDER_EMAIL) {
    console.error('SENDER_EMAIL is not set in environment variables');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {

    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_API_KEY.startsWith('SG.')) {
        return NextResponse.json({ success: false, message: 'SendGrid API key is missing or invalid' }, { status: 500 });
    }

    if (!process.env.RECIPIENT_EMAIL || !process.env.SENDER_EMAIL) {
        return NextResponse.json({ success: false, message: 'Email configuration is incomplete' }, { status: 500 });
    }

    const body = await request.json();

    const parsed = schema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ success: false, message: parsed.error.errors[0].message }, { status: 400 })
    }

    const { name, email, phone, state, age, incomeRange, contactMethod, message } = parsed.data;

    // Format the email content
    const emailContent = `
      New Contact Form Submission:

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      State: ${state}
      Age: ${age}
      Income Range: ${incomeRange}
      Preferred Contact Method: ${contactMethod}

      Message:
      ${message}
    `;

    const msg = {
        to: process.env.RECIPIENT_EMAIL,
        from: process.env.SENDER_EMAIL,
        subject: 'New Contact Form Submission - Iarann Wealth',
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
}