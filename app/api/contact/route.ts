import { NextResponse } from 'next/server';

// In production, you would use a real email service
// You can uncomment and configure this with your email provider
// import sgMail from '@sendgrid/mail';
// sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interest: 'buying' | 'selling' | 'valuation' | 'ubuntu' | 'other';
  recaptchaToken: string;
};

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body: FormData = await request.json();
    const { name, email, phone, subject, message, interest, recaptchaToken } = body;
    
    // Form validation
    if (!name || !email || !subject || !message || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification required' },
        { status: 400 }
      );
    }
    
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }
    
    // Prepare email content
    const emailToGary = {
      to: 'gary@theubuntuagent.co.za',
      from: 'website@theubuntuagent.co.za',
      subject: `New Website Inquiry: ${subject}`,
      html: `
        <h3>New Website Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `
    };
    
    // Confirmation email to client
    const confirmationEmail = {
      to: email,
      from: 'gary@theubuntuagent.co.za',
      subject: 'Thank You for Contacting The Ubuntu Agent',
      html: `
        <h3>Thank You for Your Message</h3>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to The Ubuntu Agent. I've received your inquiry about ${interest} and will get back to you as soon as possible.</p>
        <p>For your reference, here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
        <p>In the spirit of Ubuntu,</p>
        <p><strong>Gary Berkowitz</strong><br>The Ubuntu Agent | eXp South Africa</p>
      `
    };
    
    // In production, uncomment to send actual emails
    // try {
    //   await Promise.all([
    //     sgMail.send(emailToGary),
    //     sgMail.send(confirmationEmail)
    //   ]);
    // } catch (emailError) {
    //   console.error('Email sending error:', emailError);
    //   return NextResponse.json(
    //     { error: 'Failed to send email notification' },
    //     { status: 500 }
    //   );
    // }
    
    // For now, just log the data to the console in development
    console.log('Form submission received:', {
      ...body,
      recaptchaToken: 'token-redacted'
    });
    
    // Simulate a brief delay for realistic API response time
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message! We will contact you shortly.',
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}