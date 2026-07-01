import { useQuery } from "@tanstack/react-query";

import CandidateService from "../../services/candidate.service";

export const useCandidates = (page = 1) => {

    return useQuery({
        queryKey: ["candidates", page],
        queryFn: () => CandidateService.getAll(page),
    });

};