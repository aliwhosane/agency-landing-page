import nodemailer from 'nodemailer';
import { tapeataleCreds } from '../../../../constants';
import Mail from 'nodemailer/lib/mailer';
import {  type NextRequest,NextResponse} from 'next/server';
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


export async function POST(request:NextRequest) {
    const { email, name, message} = await request.json();

    const oauth2Client = new OAuth2(
       tapeataleCreds.gci,
        tapeataleCreds.gcs,
        "https://developers.google.com/oauthplayground" // Redirect URL
   );
   oauth2Client.setCredentials({
    refresh_token: tapeataleCreds.grt
});
const accessToken = oauth2Client.getAccessToken()
    
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth: {
            type: 'OAuth2',
        user: 'contact@tapeatale.com',
        clientId: tapeataleCreds.gci,
        clientSecret: tapeataleCreds.gcs,
        refreshToken: tapeataleCreds.grt,
        accessToken:accessToken
        }
    });

    const mailOptions: Mail.Options = {
        from: process.env.emailId,
        to:process.env.emailId,
        subject: `Message from ${name} (${email})`,
        text:message
    }

    const sendMailPromise = () => new Promise<string>((resolve,reject) => {
        transport.sendMail(mailOptions, function(err) {
            if(!err) {
                resolve('Email Sent');
            }else {
                reject(err.message)
            }
        });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({message:'Email sent'});
    } catch(err) {
        return NextResponse.json({error:err}, {status:500});
    }

}