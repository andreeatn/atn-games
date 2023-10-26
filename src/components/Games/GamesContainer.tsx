import { useInfiniteGames } from "hooks/useGames";
import GameCard from "./GameCard";
import InfiniteScroll from "react-infinite-scroll-component";
import GameQuery from "entities/gameQuery";
import { useContext, useEffect, useState } from "react";
import GameQueryContext from "context/gameQueryContext";
import GameCardSkeleton from "./GameCardSkeleton";

function GamesContainer() {
  const { gameQuery } = useContext(GameQueryContext);
  const [queryObj, setQueryObj] = useState<GameQuery>({} as GameQuery);
  const defaultResultNo = 8;
  const cardSkeletons = [...Array(8)];

  useEffect(() => {
    setQueryObj({ ...gameQuery, resultsNo: defaultResultNo });
  }, [gameQuery]);

  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteGames(queryObj);

  return (
    <>
      <div className="container py-3">
        {isLoading && (
          <div className="row gx-1 gy-3 g-md-3 overflow-hidden">
            {cardSkeletons.map((skeleton, i) => (
              <div className="col col-12 col-md-6 col-lg-4 col-xl-3" key={i}>
                <GameCardSkeleton key={i} />
              </div>
            ))}
          </div>
        )}
        <InfiniteScroll
          className="row gx-1 gy-3 g-md-3 overflow-hidden"
          dataLength={data ? data?.pages.length : 0}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={
            <div className="col col-12 mt-5 d-flex justify-content-center">
              <div
                className="spinner-border text-info "
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
          endMessage={
            <h5 className="text-white p-3">All games have loaded.</h5>
          }
        >
          {data?.pages.map((games) =>
            games.results.map((game) => (
              <div
                className="col col-12 col-md-6 col-lg-4 col-xl-3"
                key={game.id}
              >
                <GameCard game={game} />
              </div>
            ))
          )}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default GamesContainer;
