import { useMutation, useQueryClient } from "@tanstack/react-query";
import CandidateService from "../../services/candidate.service";
import type { CandidateFormData } from "../../types/candidate.schema";


export const useCreateCandidate = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (data: CandidateFormData) =>
            CandidateService.create(data),

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: ["candidates"],
            });

        },

    });

};