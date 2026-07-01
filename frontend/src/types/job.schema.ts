import { z } from "zod";

export const jobSchema = z.object({
    title: z.string().min(3),
    department: z.string().min(2),
    location: z.string().min(2),
    experience_years: z.coerce.number().min(0),
    description: z.string().min(20),
    requirements: z.string().min(10),
    status: z.string(),
});

export type JobFormData = z.infer<typeof jobSchema>;