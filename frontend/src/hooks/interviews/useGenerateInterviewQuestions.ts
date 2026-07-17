import {useMutation,useQueryClient} from "@tanstack/react-query";
import InterviewQuestionService from "../../services/interview-question.service";

export const useGenerateInterviewQuestions = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: InterviewQuestionService.generate,

        onSuccess: (_, applicationId) => {

            queryClient.invalidateQueries({

                queryKey: [
                    "interview-questions",
                    applicationId,
                ],

            });

        },

    });

};