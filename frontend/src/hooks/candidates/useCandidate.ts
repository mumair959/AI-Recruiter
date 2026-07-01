import { useQuery } from "@tanstack/react-query";
import CandidateService from "../../services/candidate.service";

export const useCandidate=(id:number)=>{
    return useQuery({
        queryKey:["candidate",id],
        queryFn:()=> CandidateService.getById(id),
        enabled:!!id,
    });

};