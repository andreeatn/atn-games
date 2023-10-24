import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { StoreDetails } from "../entities/store";

const useStoreDetails = (storeId: number) => {
    return useQuery<StoreDetails, Error>({
        queryKey:['store', storeId],
        queryFn:()=>
            apiClient.get(`/stores/${storeId}`)
            .then(res => res.data)
            .catch(err => err)
    })
}

export default useStoreDetails;