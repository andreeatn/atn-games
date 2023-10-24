import { useQuery } from "@tanstack/react-query";
import Game from "entities/game";
import apiClient from "services/apiClient";
import FetchResponse from "entities/fetchResponse";

const useGames = (platformId?: string, resultsNo?:number, ordering?:string) => {
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', platformId],
        queryFn: () => 
            apiClient.get('/games',{
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