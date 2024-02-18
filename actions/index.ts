"use server"

import { Resend } from 'resend';

import { ContactInputs } from "@/components/ContactDisplay/ContactForm";
import { contactFormDataSchema } from "@/lib/utils";
import EmailTemplate from '@/components/ContactDisplay/EmailTemplate';

const resend = new Resend(process.env.RESEND_APY_KEY);
export async function submitContactForm(formData: ContactInputs) {
    try {
        contactFormDataSchema.parse(formData);

        const { data, error } = await resend.emails.send({
            from: 'Perdele <g3orrg301@gmail.com>',
            to: ['george.ionita514@gmail.com'],
            subject: 'Hello',
            text: 'gg',
            react: EmailTemplate({ name: 'george' })
        })

        console.log(data, error);

        return true;

    } catch (err) {
        console.error('i am the catch')
        return false;
    }

}