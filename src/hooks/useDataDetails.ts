import { useQuery } from "@tanstack/react-query";
import apiClient from "services/apiClient";

const useDataDetails = <T>(endpoint:string, data:string, dataId: number) => {
    return useQuery<T, Error>({
        queryKey:['data', dataId],
        queryFn:()=>
            apiClient.get(`/${endpoint}/${dataId}`)
            .then(res => res.data)
            .catch(err => err)
    })
}

export default useDataDetails;