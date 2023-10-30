import { useQuery } from "@tanstack/react-query";
import FetchResponse from "entities/fetchResponse";
import apiClient from "services/apiClient";

const useGameMedia = <T>(mediaType: string, gameId: number) => {
    return useQuery<FetchResponse<T>,Error>({
        queryKey: ['game', mediaType, gameId],
        queryFn: () => 
            apiClient.get(`/games/${gameId}/${mediaType}`)
                    .then(res => res.data)
                    .catch(err => err)
    })
}

export default useGameMedia;