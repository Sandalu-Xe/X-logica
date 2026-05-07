import type { VercelRequest, VercelResponse } from '@vercel/node';
import formidable, { Fields, Files } from 'formidable';
import fs from 'fs';
import nodemailer from 'nodemailer';

// Disable Vercel's default body parser so formidable can handle multipart/form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper: parse multipart form with formidable
function parseForm(req: VercelRequest): Promise<{ fields: Fields; files: Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024, // 10 MB
      keepExtensions: true,
    });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

// Helper: read a scalar field value from formidable Fields
function field(fields: Fields, key: string): string {
  const val = fields[key];
  if (Array.isArray(val)) return val[0] ?? '';
  return val ?? '';
}

// ─── POST /api/apply — Job application with optional CV attachment ────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error('[/api/apply] Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars');
    return res.status(500).json({
      success: false,
      message: 'Server email configuration is missing. Please contact us directly at info.xlogica@gmail.com',
    });
  }

  let fields: Fields;
  let files: Files;

  try {
    ({ fields, files } = await parseForm(req));
  } catch (err) {
    console.error('[/api/apply] Form parse error:', err);
    return res.status(400).json({ success: false, message: 'Failed to parse form data.' });
  }

  const name     = field(fields, 'name');
  const email    = field(fields, 'email');
  const phone    = field(fields, 'phone');
  const portfolio = field(fields, 'portfolio');
  const message  = field(fields, 'message');
  const position = field(fields, 'position');

  // Build attachment from uploaded file (if present)
  const attachments: nodemailer.SendMailOptions['attachments'] = [];
  const cvFile = Array.isArray(files.cv) ? files.cv[0] : files.cv;

  if (cvFile && cvFile.filepath) {
    try {
      const buffer = fs.readFileSync(cvFile.filepath);
      attachments.push({
        filename: cvFile.originalFilename ?? 'cv',
        content: buffer,
        contentType: cvFile.mimetype ?? 'application/octet-stream',
      });
    } catch (err) {
      console.error('[/api/apply] Could not read uploaded file:', err);
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"X-Logica Careers" <${user}>`,
      to: 'info.xlogica@gmail.com',
      replyTo: email,
      subject: `🚀 New Job Application — ${position || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 12px;">
          <div style="background: #0a0a0a; padding: 24px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Job Application</h1>
            <p style="color: #888; margin: 8px 0 0;">X-Logica Careers Portal</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #374151; width: 140px;">Position</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #2563eb; font-weight: bold;">${position || 'General Application'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #374151;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111827;">${name || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #374151;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="color: #2563eb;">${email || '—'}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #374151;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111827;">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #374151;">Portfolio</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111827;">
                  ${portfolio ? `<a href="${portfolio}" style="color: #2563eb;">${portfolio}</a>` : '—'}
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151; vertical-align: top;">Cover Letter</td>
                <td style="padding: 12px 0; color: #111827; line-height: 1.6;">${message}</td>
              </tr>` : ''}
            </table>
          </div>
          ${attachments.length > 0
            ? `<p style="color: #6b7280; font-size: 13px; margin-top: 16px; text-align: center;">📎 CV attached: <strong>${cvFile?.originalFilename}</strong></p>`
            : `<p style="color: #6b7280; font-size: 13px; margin-top: 16px; text-align: center;">No CV attached</p>`
          }
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
            Sent via X-Logica Careers Portal
          </p>
        </div>
      `,
      attachments,
    });

    return res.status(200).json({ success: true, message: 'Application submitted successfully!' });
  } catch (err) {
    console.error('[/api/apply] Nodemailer error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to send application. Please try again or email us directly at info.xlogica@gmail.com',
    });
  }
}
