# Contact Form Setup Instructions

The Ubuntu Agent website includes a contact form to allow visitors to schedule consultations and make inquiries. This document explains how to set up the form to send emails in production.

## Required Services

1. **Resend Account**: For sending emails (integrated with Vercel)
2. **Google reCAPTCHA v3**: For spam protection

## Setup Steps

### 1. Resend Setup

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Create an API key with permissions to send emails
3. Verify your domain for better deliverability
4. Set up the Resend integration in your Vercel project settings

### 2. Google reCAPTCHA Setup

1. Go to the [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Register a new site:
   - Choose reCAPTCHA v3
   - Add your domain(s)
   - Accept the terms of service
4. You'll receive a Site Key and Secret Key

### 3. Environment Variables Setup

Create a `.env.local` file in the root directory of your project with the following variables:

```
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here

# reCAPTCHA v3 Keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# Contact form email settings
CONTACT_EMAIL_TO=gary@theubuntuagent.co.za
CONTACT_EMAIL_FROM=website@theubuntuagent.co.za
```

Replace the placeholder values with your actual API keys and email addresses.

### 4. Testing the Form

1. After setting up the environment variables, rebuild and restart your development server
2. Fill out and submit the form
3. Check your console logs to verify the form data is being received
4. In development mode, emails won't actually be sent (they'll just be logged)
5. Deploy to production to test actual email sending

### 5. Deployment Considerations

When deploying to Vercel or another platform:

1. Add the environment variables to your hosting platform's environment variables section
2. Make sure to include all the variables listed above
3. If using Vercel, you can use the Resend integration for simplified setup
4. After deployment, test the form on the live site

## Troubleshooting

If you encounter issues:

1. Check that all environment variables are correctly set
2. Verify your Resend account is active and the API key has proper permissions
3. Make sure your domain is verified in Resend
4. Look for error messages in your hosting platform's logs

For local development, form submissions will be logged to the console but emails won't be sent. 