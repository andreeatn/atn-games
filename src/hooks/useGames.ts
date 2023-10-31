import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Game from "entities/game";
import apiClient from "services/apiClient";
import FetchResponse from "entities/fetchResponse";
import GameQuery from "entities/gameQuery";

const useGames = (queryObj: GameQuery) => {
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', queryObj],
        queryFn: () => 
            apiClient.get('/games',{
                params:{
                    genres: queryObj.genreId,
                    platforms: queryObj.platformId,
                    page_size: queryObj.resultsNo,
                    ordering: queryObj.ordering,
                    search: queryObj.search
            }
        })
            .then(res => res.data)
            .catch(err => err)
        }
    ) 
}

export const useInfiniteGames = (queryObj: GameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', queryObj],
        queryFn: ({pageParam = 1}:any) =>
            apiClient.get('/games',{
                params:{
                    genres: queryObj.genreId,
                    platforms: queryObj.platformId,
                    ordering: queryObj.ordering,
                    search: queryObj.search,
                    page: pageParam,  
                    page_size: queryObj.resultsNo,
            }
        }).then(res => res.data)
        .catch(err => err),
        staleTime: 60 * 60 * 1000, //1 hour
        getNextPageParam: (lastPage, allPages) => 
         lastPage.next ? allPages.length + 1 : undefined,
        initialPageParam: undefined
    })
}

export default useGames;