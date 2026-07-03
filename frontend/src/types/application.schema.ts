import { z } from "zod";

export const applicationSchema = z.object({

    candidate_id: z
        .number({
            error: "Candidate is required",
        })
        .min(1, "Candidate is required"),

    employment_job_id: z
        .number({
            error: "Job is required",
        })
        .min(1, "Job is required"),

});

export type ApplicationFormData = z.infer<typeof applicationSchema>;