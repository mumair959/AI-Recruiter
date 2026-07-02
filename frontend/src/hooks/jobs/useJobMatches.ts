import { useQuery } from "@tanstack/react-query";
import JobService from "../../services/job.service";

export const useJobMatches = (jobId: number) => {
    return useQuery({
        queryKey: [
            "job-matches",
            jobId,
        ],

        queryFn: () => JobService.getMatches(jobId),
        enabled: !!jobId,
    });

};