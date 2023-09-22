import nodemailer from 'nodemailer';
import { tapeataleCreds } from '../constants';
//-----------------------------------------------------------------------------
export async function sendMail(subject:string, toEmail:string, otpText:string) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: tapeataleCreds.mailId,
        pass: tapeataleCreds.mailPassword,
      },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error.message);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}