import { NextResponse } from 'next/server';
import { z } from 'zod';

export const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    state: z.string().min(1, { message: "State is required" }),
    age: z.string().min(1, { message: "Age is required" }),
    incomeRange: z.string().min(1, { message: "Income range is required" }),
    contactMethod: z.string().min(1, { message: "Contact method is required" }),
    message: z.string().optional(),
})