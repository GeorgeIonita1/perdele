'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { submitContactForm } from '@/actions';
import { contactFormDataSchema } from '@/lib/form_schemas';

export type ContactInputs = z.infer<typeof contactFormDataSchema>

function ContactForm() {
    const { toast } = useToast();

    const form = useForm<ContactInputs>({
        resolver: zodResolver(contactFormDataSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        }
    });

    async function onSubmit(values: ContactInputs) {
        // let user know something is happening behind the scenes (disable button or smth)
        // await new Promise(resolve => setTimeout(resolve, 4000));
        const response = await submitContactForm(values);

        if (!response) {
            toast({
                title: "Error",
                description: "Please try again",
            });
        } else {
            toast({
                title: "Message sent",
                description: "Thank you! We will reach out soon",
            });
            form.reset();
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='*:mt-6 mt-10'
            >
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name*</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone*</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email*</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button>Submit</Button>
            </form>
        </Form>
    );
}

export default ContactForm;
