import { useQuery } from "@tanstack/react-query";

import JobService from "../../services/job.service";

export const useJobs = (page = 1) => {
    return useQuery({
        queryKey: ["jobs", page],
        queryFn: () => JobService.getAll(page),
    });

};