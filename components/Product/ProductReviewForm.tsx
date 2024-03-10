'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";

import { useToast } from "../ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { submitProductReviewForm } from "@/actions";
import { productReviewDataSchema } from "@/lib/form_schemas";

export type ProductReviewInputs = z.infer<typeof productReviewDataSchema>

function ProductReviewForm() {
    const { toast } = useToast();

    const form = useForm<ProductReviewInputs>({
        resolver: zodResolver(productReviewDataSchema),
        defaultValues: {
            rating: 0,
            message: '',
            name: '',
            email: ''
        }
    });

    async function onSubmit(values: ProductReviewInputs) {
        // let user know something is happening behind the scenes (disable button or smth)
        // await new Promise(resolve => setTimeout(resolve, 4000));

        const response = await submitProductReviewForm(values);

        if (!response) {
            toast({
                title: 'Error sending the review',
                description: 'Please try again'
            })
        } else {
            toast({
                title: "Review sent",
                description: "Thank you! We will review it soon.",
            });
            form.reset();
        }
    }

    const setFormRatingValue = (n: number) => {
        form.setValue('rating', n);
        form.trigger('rating');
    }

    return (
        <div>
            <h3>Add a review</h3>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="my-6">
                        <label>Rating</label>
                        <div className="flex mt-2">
                            <Star className={`${form.getValues('rating') >= 1 ? 'text-amber-400' : ''}`} onClick={() => setFormRatingValue(1)} />
                            <Star className={`${form.getValues('rating') >= 2 ? 'text-amber-400' : ''}`} onClick={() => setFormRatingValue(2)} />
                            <Star className={`${form.getValues('rating') >= 3 ? 'text-amber-400' : ''}`} onClick={() => setFormRatingValue(3)} />
                            <Star className={`${form.getValues('rating') >= 4 ? 'text-amber-400' : ''}`} onClick={() => setFormRatingValue(4)} />
                            <Star className={`${form.getValues('rating') >= 5 ? 'text-amber-400' : ''}`} onClick={() => setFormRatingValue(5)} />
                        </div>
                        <p className="text-red-600 text-sm">{form.formState.errors?.rating?.message}</p>
                    </div>
                    <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                            <FormItem hidden>
                                <FormLabel>Rating</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button>Submit</Button>
                </form>
            </Form>
        </div>
    );
}

export default ProductReviewForm;
