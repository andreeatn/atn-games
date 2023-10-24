import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import FetchResponse from "../entities/fetchResponse";
import Store from "../entities/store";

const useStores = (resultsNo?: number) => {
    return useQuery<FetchResponse<Store>, Error>({
        queryKey:['stores'],
        queryFn:()=>
            apiClient.get('/stores',{
                params:{
                    page_size: resultsNo
            }
        })
            .then(res => res.data)
            .catch(err => err)
    })
}

export default useStores;