import GameQueryContext from "context/gameQueryContext";
import { useContext } from "react";

function GamesShowSelectedQuery() {
  const { gameQuery } = useContext(GameQueryContext);

  return (
    <div className="container py-3 text-white">
      <div className="row">
        <div className="col col-12 ">
          <div className="d-flex flex-row">
            {(gameQuery.genreName || gameQuery.platformName) && (
              <div className="filterBy d-flex flex-row">
                Filter by:
                {gameQuery.genreName && (
                  <p className="px-3">
                    Genre {">"}{" "}
                    <span className="badge bg-info">{gameQuery.genreName}</span>{" "}
                  </p>
                )}
                {gameQuery.platformName && (
                  <p className="px-3">
                    Platform {">"}{" "}
                    <span className="badge bg-info">
                      {gameQuery.platformName}
                    </span>{" "}
                  </p>
                )}
              </div>
            )}
            {gameQuery.ordering && (
              <div className="orderBy">
                <p className="px-3">
                  Order by:{" "}
                  <span className="badge bg-info">{gameQuery.ordering}</span>
                </p>
              </div>
            )}
            {gameQuery.search && (
              <div className="searchTerms">
                <p className="px-3">
                  Search Terms:{" "}
                  <span className="badge bg-info">{gameQuery.search}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesShowSelectedQuery;
