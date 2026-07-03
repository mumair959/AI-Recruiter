import { api } from "../api/client";
import type { Application } from "../types/application";
import type { ApplicationFormData } from "../types/application.schema";
import type { PaginatedResponse } from "../types/pagination";


class ApplicationService {

    async getAll(page = 1): Promise<PaginatedResponse<Application>> {

        const response = await api.get("/applications", {
            params: {page},
        });

        return response.data;
    }

    async getById(id: number): Promise<Application> {

        const response = await api.get(`/applications/${id}`);

        return response.data;

    }

    async create(data: ApplicationFormData): Promise<Application> {

        const response = await api.post(
            "/applications",
            data
        );

        return response.data;
    }

    async updateStatus(id: number, status: string): Promise<Application> {

        const response = await api.patch(
            `/applications/${id}/status`,
            {
                status,
            }
        );

        return response.data;

    }

}

export default new ApplicationService();