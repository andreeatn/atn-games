import { useQuery } from "@tanstack/react-query";
import apiClient from "services/apiClient";
import FetchResponse from "entities/fetchResponse";

const useData = <T>(data: string, resultsNo?: number) => {
       return useQuery<FetchResponse<T>, Error>({
        queryKey:[data],
        queryFn:()=>
            apiClient.get(`/${data}`,{
                params:{
                    page_size: resultsNo
            }
        })
            .then(res => res.data)
            .catch(err => err),
            staleTime: 60 * 60 * 1000, //1 hour
    })
}

export default useData;