import { useQuery } from "@tanstack/react-query";

import ApplicationService from "../../services/application.service";

export const useApplications = (page = 1) => {

    return useQuery({
        queryKey: ["applications", page],
        queryFn: () => ApplicationService.getAll(page),
    });

};