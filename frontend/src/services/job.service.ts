import { api } from "../api/client";
import type { Job } from "../types/job";
import type { JobFormData } from "../types/job.schema";
import type { CandidateMatch } from "../types/match";
import type { PaginatedResponse } from "../types/pagination";

class JobService {
    async getAll(page = 1): Promise<PaginatedResponse<Job>> {
        const response = await api.get("/jobs", {
            params: {page}
        });

        return response.data;
    }

    async getById(id:number):Promise<Job>{
        const response = await api.get(`/jobs/${id}`);
        return response.data;
    }

    async create(data: JobFormData): Promise<Job> {

        const response = await api.post("/jobs",data);

        return response.data;
    }

    async getMatches(jobId: number): Promise<CandidateMatch[]> {
        const response = await api.get(
            `/jobs/${jobId}/matches`
        );

        return response.data;
    }
}

export default new JobService();