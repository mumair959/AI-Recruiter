import {useMutation, useQueryClient} from "@tanstack/react-query";

import ApplicationService from "../../services/application.service";

export const useUpdateApplicationStatus = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({
            id,
            status,
        }: {
            id: number;
            status: string;
        }) =>
            ApplicationService.updateStatus(
                id,
                status
            ),

        onSuccess: (_, variables) => {

            queryClient.invalidateQueries({
                queryKey: ["applications"],
            });

            queryClient.invalidateQueries({
                queryKey: [
                    "application",
                    variables.id,
                ],
            });

        },

    });

};