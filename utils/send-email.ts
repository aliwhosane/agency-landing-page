import { FormData } from "@/components/ContactSection";

export function sendMail(data:FormData) {
    const apiEndpoint ='/api/email';

    fetch(apiEndpoint,{
        method:'POST',
        body:JSON.stringify(data),
    }).then(res => res.json()).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
        console.error(err);
    });
}