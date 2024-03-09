'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "../ui/use-toast";
import { productReviewDataSchema } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
        console.log(values)
    }

    const testMi = (n: number) => {
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
                    <div>
                        <span onClick={() => testMi(1)}>1</span>
                        <span onClick={() => testMi(2)}>2</span>
                        <span onClick={() => testMi(3)}>3</span>
                        <span onClick={() => testMi(4)}>4</span>
                        <span onClick={() => testMi(5)}>5</span>
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
            <h1>{form.getValues('rating')}</h1>
            <button onClick={() => console.log(form)}>georgescu</button>
        </div>
    );
}

export default ProductReviewForm;
