import { useQuery } from "@tanstack/react-query";
import { Games } from "../entities/games";
import apiClient from "../services/apiClient";

 export interface FetchResponse{
        count: number;
        next: string | null,
        previous: string | null,
        results: Games[]
}

const useGames = (platformId?: string, resultsNo?:number, ordering?:string) => {
    return useQuery<FetchResponse, Error>({
        queryKey: ['games', platformId],
        queryFn: () => 
            apiClient.get<FetchResponse>('/games',{
                params:{
                    platforms: platformId,
                    page_size: resultsNo,
                    ordering: ordering
            }
        })
            .then(res => res.data)
            .catch(err => err)
        }
    ) 
}

export default useGames;