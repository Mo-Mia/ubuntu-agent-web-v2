import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
  name: string;
  email: string;
  phone: string;
  appointmentDate: string | null;
  message: string;
  preferredContact: string;
  interest: 'buying' | 'selling' | 'valuation' | 'ubuntu' | 'consultation' | 'other';
  subject: string;
  recaptchaToken: string;
};

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  // Skip verification in development if no key is provided
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn('reCAPTCHA secret key not found, skipping verification');
    return true;
  }
  
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
    const { 
      name, 
      email, 
      phone, 
      appointmentDate, 
      message, 
      preferredContact, 
      interest, 
      subject, 
      recaptchaToken 
    } = body;
    
    // Form validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Verify reCAPTCHA (make optional in development)
    let isRecaptchaValid = true;
    if (process.env.NODE_ENV === 'production') {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification required' },
          { status: 400 }
        );
      }
      
      isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      
      if (!isRecaptchaValid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }
    
    // Format appointment date for display
    const formattedDate = appointmentDate 
      ? new Date(appointmentDate).toLocaleDateString('en-ZA', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Not specified';
    
    // Prepare email content
    const toEmail = process.env.CONTACT_EMAIL_TO || 'gary@theubuntuagent.co.za';
    const fromEmail = process.env.CONTACT_EMAIL_FROM || 'website@theubuntuagent.co.za';
    
    // Create email content for Gary
    const emailToGaryHtml = `
      <h3>New Consultation Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Preferred Date:</strong> ${formattedDate}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>') || 'No message provided'}</p>
    `;
    
    // Create confirmation email to client
    const confirmationEmailHtml = `
      <h3>Thank You for Your Consultation Request</h3>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to The Ubuntu Agent. I've received your consultation request and will get back to you as soon as possible.</p>
      <p>Here are the details of your request:</p>
      <ul>
        <li><strong>Interest:</strong> ${interest}</li>
        <li><strong>Preferred Date:</strong> ${formattedDate}</li>
        <li><strong>Preferred Contact Method:</strong> ${preferredContact}</li>
      </ul>
      ${message ? `<p><strong>Your Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>` : ''}
      <p>In the spirit of Ubuntu,</p>
      <p><strong>Gary Berkowitz</strong><br>The Ubuntu Agent | eXp South Africa<br>+27 061-540-3265</p>
    `;
    
    // Send emails if in production or if Resend is configured
    if (process.env.NODE_ENV === 'production' && process.env.RESEND_API_KEY) {
      try {
        // Send email to Gary
        const emailToGaryResponse = await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject: `New Consultation Request: ${interest}`,
          html: emailToGaryHtml
        });
        
        // Send confirmation email to client
        const confirmationEmailResponse = await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: 'Thank You for Contacting The Ubuntu Agent',
          html: confirmationEmailHtml
        });
        
        console.log('Emails sent successfully', {
          toGary: emailToGaryResponse,
          toClient: confirmationEmailResponse
        });
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        return NextResponse.json(
          { error: 'Failed to send email notification' },
          { status: 500 }
        );
      }
    } else {
      // Just log the data in development
      console.log('Form submission received (emails not sent in development):', {
        emailToGary: {
          to: toEmail,
          from: fromEmail,
          subject: `New Consultation Request: ${interest}`,
          html: emailToGaryHtml
        },
        confirmationEmail: {
          to: email,
          from: fromEmail,
          subject: 'Thank You for Contacting The Ubuntu Agent',
          html: confirmationEmailHtml
        },
        recaptchaToken: 'token-redacted'
      });
    }
    
    // Simulate a brief delay for realistic API response time in development
    if (process.env.NODE_ENV !== 'production') {
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
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