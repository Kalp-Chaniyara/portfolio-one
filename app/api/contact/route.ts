import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
     try {
          const { name, email, message } = await req.json();

          if (!name || !email || !message) {
               return NextResponse.json(
                    { error: 'Missing required fields' },
                    { status: 400 }
               );
          }

          const transporter = nodemailer.createTransport({
               service: 'gmail',
               host: 'smtp.gmail.com',
               port: 587,
               secure: false, // true for 465, false for other ports
               auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
               },
          });

          const mailOptions = {
               from: process.env.EMAIL_USER,
               to: process.env.SEND_MAIL_TO, // Send to yourself
               replyTo: email,
               subject: `Portfolio Contact: Message from ${name}`,
               text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
               html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
          };

          await transporter.sendMail(mailOptions);

          return NextResponse.json(
               { message: 'Email sent successfully' },
               { status: 200 }
          );
     } catch (error) {
          console.error('Error sending email:', error);
          return NextResponse.json(
               { error: 'Failed to send email' },
               { status: 500 }
          );
     }
}
