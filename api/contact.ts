import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// ─── POST /api/contact — General contact form ────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error('[/api/contact] Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars');
    return res.status(500).json({
      success: false,
      message: 'Server email configuration is missing. Please contact us directly at info.xlogica@gmail.com',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"X-Logica Website" <${user}>`,
      to: 'info.xlogica@gmail.com',
      replyTo: email,
      subject: `💬 New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 12px;">
          <div style="background: #0a0a0a; padding: 24px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Message</h1>
            <p style="color: #888; margin: 8px 0 0;">X-Logica Website</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #374151; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #374151;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #111827; line-height: 1.6;">${message}</td>
              </tr>
            </table>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
            Sent via X-Logica Website Contact Form
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('[/api/contact] Nodemailer error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email us directly at info.xlogica@gmail.com',
    });
  }
}
