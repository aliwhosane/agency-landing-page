import { FormData } from "@/components/ContactSection";

export function sendMail(data:FormData) {
    const apiEndpoint ='/api/email';

    fetch(apiEndpoint,{
        method:'POST',
        body:JSON.stringify(data),
    }).then(res => res.json()).then(response => {
        alert(response);
    }).catch(err => {
        alert(err);
    });
}