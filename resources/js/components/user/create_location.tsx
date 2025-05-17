'use client';
 
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link } from '@inertiajs/react';

const formSchema = z.object({
    locationName: z.string().min(2, {
        message: 'Location name must be at least 2 characters.',
    }),
    contactEmail: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    captcha: z.string().min(1, {
        message: 'Please complete the captcha.',
    }),
});

export function CreateLocationCard() {
    const [captchaValue, setCaptchaValue] = useState('');

    const form = useForm<z.infer<typeof formSchema>>({ 
        defaultValues: {
            locationName: '',
            contactEmail: '',
            captcha: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        // Handle form submission
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-center text-2xl font-semibold">Create Location</CardTitle>
                <CardDescription className="text-center">Enter the details for your new location</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="locationName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter location name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contactEmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contact Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="captcha"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Captcha</FormLabel>
                                    <FormControl>
                                        <div className="space-y-2">
                                            <div className="flex h-16 items-center justify-center rounded-md bg-accent">
                                                <span className="text-sm text-gray-500">Captcha placeholder</span>
                                            </div>
                                            <Input
                                                placeholder="Enter captcha"
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    setCaptchaValue(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Create Location
                        </Button>
                    </form>
                </Form>
            </CardContent> 
        </Card>
    );
}
