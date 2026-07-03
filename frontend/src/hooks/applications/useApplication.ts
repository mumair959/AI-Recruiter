import { useQuery } from "@tanstack/react-query";
import ApplicationService from "../../services/application.service";

export const useApplication=(id:number)=>{
    return useQuery({
        queryKey:["application",id],
        queryFn:()=> ApplicationService.getById(id),
        enabled:!!id,
    });

};