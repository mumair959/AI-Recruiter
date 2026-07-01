import { useMutation, useQueryClient } from "@tanstack/react-query";
import CandidateService from "../../services/candidate.service";

export const useUploadResume = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:
            ({id,file}:{
                id:number;
                file:File;
            })=>

                CandidateService.uploadResume(id,file),

        onSuccess:(candidate)=>{
            queryClient.invalidateQueries({
                queryKey:["candidate",candidate.id],
            });
        },
    });
};