import { z } from "zod";

export const candidateSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.email("Invalid email address"),
    phone: z.string().min(10, "Phone is required"),
});

export type CandidateFormData = z.infer<typeof candidateSchema>;