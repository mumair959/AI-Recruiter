import { api } from "../api/client";

import type { InterviewQuestion } from "../types/interview-question";

class InterviewQuestionService {

    async get(applicationId: any): Promise<InterviewQuestion | null> {
        const response = await api.get(
            `/applications/${applicationId}/interview-questions`
        );

        return response.data;
    }

    async generate(applicationId: any): Promise<InterviewQuestion> {
        const response = await api.post(
            `/applications/${applicationId}/interview-questions`
        );

        return response.data;
    }
}

export default new InterviewQuestionService();