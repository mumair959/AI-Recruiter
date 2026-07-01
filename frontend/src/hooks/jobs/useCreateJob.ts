import { useMutation, useQueryClient } from "@tanstack/react-query";
import JobService from "../../services/job.service";
import type { JobFormData } from "../../types/job.schema";

export const useCreateJob = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (data: JobFormData) =>
            JobService.create(data),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["jobs"],
            });
        },

    });

};