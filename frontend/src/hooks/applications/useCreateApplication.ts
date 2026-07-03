import { useMutation, useQueryClient } from "@tanstack/react-query";

import ApplicationService from "../../services/application.service";

export const useCreateApplication = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ApplicationService.create,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["applications"],

            });

        },

    });

};