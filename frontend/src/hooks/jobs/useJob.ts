import { useQuery } from "@tanstack/react-query";
import JobService from "../../services/job.service";

export const useJob = (id: number) => {
    return useQuery({
        queryKey: ["job", id],
        queryFn: () => JobService.getById(id),
        enabled: !!id,
    });
};