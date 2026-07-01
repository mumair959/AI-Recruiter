import { api } from "../api/client";
import type { Candidate } from "../types/candidate";
import type { CandidateFormData } from "../types/candidate.schema";
import type { PaginatedResponse } from "../types/pagination";


class CandidateService {

    async getAll(page = 1): Promise<PaginatedResponse<Candidate>> {

        const response = await api.get("/candidates", {
            params: {page},
        });

        return response.data;
    }

    async getById(id: number): Promise<Candidate> {

        const response = await api.get(`/candidates/${id}`);

        return response.data;

    }

    async create(data: CandidateFormData): Promise<Candidate> {

        const response = await api.post(
            "/candidates",
            data
        );

        return response.data;
    }

    async uploadResume(id: number, file: File) {
        const formData = new FormData();
        formData.append("resume", file);

        const response = await api.post(
            `/candidates/${id}/resume`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data;

    }
}

export default new CandidateService();