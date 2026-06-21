import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_WRfng3J7_MKFk6xkULVoELypt8BnMjKxy');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Paballelo High School <onboarding@resend.dev>',
      to: '0740295373ms@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: emailContent,
      replyTo: email,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
