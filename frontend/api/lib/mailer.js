import nodemailer from 'nodemailer';

export async function sendFallbackEmail({ subject, text }) {
  // Use environment variables for actual deployment.
  // Here we provide a placeholder SMTP config for developers to replace.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'user@example.com',
      pass: process.env.SMTP_PASS || 'supersecret'
    }
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || 'no-reply@real1editor.com',
    to: process.env.FALLBACK_TO_EMAIL || process.env.SMTP_USER || 'your-email@example.com',
    subject,
    text
  };

  return transporter.sendMail(mailOptions);
}
