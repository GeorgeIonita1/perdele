"use server"

import { Resend } from 'resend';

import { ContactInputs } from "@/components/ContactDisplay/ContactForm";
import EmailTemplate from '@/components/ContactDisplay/EmailTemplate';
import { ProductReviewInputs } from '@/components/Product/ProductReviewForm';
import { contactFormDataSchema } from '@/lib/form_schemas';

const resend = new Resend(process.env.RESEND_APY_KEY);

export async function submitContactForm(formData: ContactInputs) {
    try {
        // const { name, phone, email, message } = contactFormDataSchema.parse(formData);
        // await resend.emails.send({
        //     from: 'Perdele <delivered@resend.dev>',
        //     to: ['g3orrg301@gmail.com'],
        //     subject: 'New Contact',
        //     text: 'gg',
        //     react: EmailTemplate({
        //         name,
        //         phone,
        //         email,
        //         message: message || 'No message'
        //     })
        // })
        return true;

    } catch (err) {
        console.log('the error os', err)
        return false;
    }

}

export async function submitProductReviewForm(formData: ProductReviewInputs) {
    try {
        // send to db with published prop null
        return true;
    } catch (err) {
        console.log('Error sending the product review', err);
        return false;
    }
}
