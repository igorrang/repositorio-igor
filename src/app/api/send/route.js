// /pages/api/send.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST( req) {
 
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      text: `Subject: ${subject}\n\nThank you for contacting us!\n\nNew message submitted:\n\n${message}`,
    });
    res.status(200).json(data);
  } catch (error) {
    req.status(500).json({ error: error.message });
  }
}

export function GET(req) {
  req.status(405).json({ error: 'Method not allowed' });
}