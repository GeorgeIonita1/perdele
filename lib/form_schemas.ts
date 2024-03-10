import { z } from "zod";

export const contactFormDataSchema = z.object({
    name: z.string()
        .max(30, { message: 'Name must be shorter than 30 characters long' })
        .min(3, { message: 'Name must be at lease 3 characters ' }),
    phone: z.string()
        .max(15, { message: 'Phone number must be shorter than 15 characters long' })
        .min(3, { message: 'Phone number is required' }),
    email: z.string().email().max(50, { message: 'Email must be shorter than 50 characters' }),
    message: z.string().max(200, { message: 'Message must be less than 200 characters' })
});

export const productReviewDataSchema = z.object({
    rating: z.number()
        .positive({ message: 'Rating must be a positive number' })
        .lte(5, { message: 'Rating must be less or equal 5' }),
    message: z.string()
        .max(400, { message: 'Message must be less than 400 characters' })
        .min(3, { message: 'Message must be at lease 3 characters' }),
    name: z.string()
        .max(30, { message: 'Name must be shorter than 30 characters long' })
        .min(3, { message: 'Name must be at lease 3 characters ' }),
    email: z.string()
        .email()
        .max(50, { message: 'Email must be shorter than 50 characters' }),
});
