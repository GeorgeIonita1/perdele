'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { ContactFormDataSchema } from '@/lib/utils';

type ContactInputs = z.infer<typeof ContactFormDataSchema>

function ContactDisplay() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm<ContactInputs>({
        resolver: zodResolver(ContactFormDataSchema)
    });

    const onSubmit: SubmitHandler<ContactInputs> = data => {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} />
            {errors.name?.message && (
                <p>{errors.name.message}</p>
            )}

            <input {...register('phone')} />
            {errors.phone?.message && (
                <p>{errors.phone.message}</p>
            )}

            <input {...register('email')} />
            {errors.email?.message && (
                <p>{errors.email.message}</p>
            )}

            <textarea {...register('message')} />
            {errors.message?.message && (
                <p>{errors.message.message}</p>
            )}

            <button type='submit'>Submit</button>
        </form>
    );
}

export default ContactDisplay;
