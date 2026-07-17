import { useQuery } from "@tanstack/react-query";

import InterviewQuestionService from "../../services/interview-question.service";

export const useInterviewQuestions = (
    applicationId: any
) => {

    return useQuery({

        queryKey: [
            "interview-questions",
            applicationId,
        ],

        queryFn: () =>
            InterviewQuestionService.get(
                applicationId
            ),

        enabled: applicationId > 0,

        retry: false,

    });

};