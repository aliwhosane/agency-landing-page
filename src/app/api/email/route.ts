import nodemailer from 'nodemailer';
import { tapeataleCreds } from '../../../../constants';
import Mail from 'nodemailer/lib/mailer';
import {  type NextRequest,NextResponse} from 'next/server';


export async function POST(request:NextRequest) {
    const { email, name, message} = await request.json();
    
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:tapeataleCreds.emailId,
            pass:tapeataleCreds.password
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