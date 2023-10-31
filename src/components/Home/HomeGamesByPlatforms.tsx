import GameQueryContext from "context/gameQueryContext";
import GameQuery from "entities/gameQuery";
import useGames from "hooks/useGames";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface Props {
  platformId: string;
  platformSlug: string;
  platformName: string;
  ordering?: string;
}

function HomeGamesByPlatforms({
  platformId,
  platformSlug,
  platformName,
  ordering,
}: Props) {
  const queryObj: GameQuery = {
    platformId: platformId,
    ordering: ordering,
    resultsNo: 6,
  };
  const carouselId = `carousel${platformName}GamesControls`;
  const btnTarget = "#" + carouselId;
  const { data: games } = useGames(queryObj);
  const carouselItem1 = games?.results.filter((game, index) => index < 2);
  const carouselItem2 = games?.results.filter(
    (game, index) => index > 1 && index < 4
  );
  const carouselItem3 = games?.results.filter(
    (game, index) => index > 3 && index < 6
  );

  const { gameQuery, setGameQuery } = useContext(GameQueryContext);
  const handleClick = () => {
    setGameQuery({
      ...gameQuery,
      search: undefined,
      platformId: platformId,
      platformName: platformSlug,
    });
    window.scroll(0, 0);
  };

  return (
    <>
      <Link
        to={"/games"}
        className="text-decoration-none"
        onClick={handleClick}
      >
        <h2 className="text-white mt-5 mb-4 border-bottom border-2 pb-3">
          {platformName.toUpperCase()} Games
        </h2>
      </Link>
      <div
        className="carousel slide"
        id={carouselId}
        data-bs-touch="true"
        data-bs-interval="false"
        key={platformId}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex flex-row justify-content-evenly">
              {carouselItem1?.map((item) => (
                <div className="col-6 col-md-4 px-1 mx-xl-5" key={item.id}>
                  <div className="card bg-success">
                    <img
                      src={item.background_image}
                      alt="Game cover"
                      className="card-img m-0"
                      style={{ height: "25vh", objectFit: "cover" }}
                    />
                    <div className="card-body text-white">
                      <h5 className="card-title">{item.name}</h5>
                      <Link
                        to={`/games/${item.id}`}
                        className="stretched-link"
                        onClick={() => {
                          window.scroll(0, 0);
                        }}
                      ></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex flex-row justify-content-evenly">
              {carouselItem2?.map((item) => (
                <div className="col-6 col-md-4 px-1 mx-xl-5 " key={item.id}>
                  <div className="card bg-success">
                    <img
                      src={item.background_image}
                      alt="Game cover"
                      className="card-img m-0"
                      style={{ height: "25vh", objectFit: "cover" }}
                    />
                    <div className="card-body text-white">
                      <h5 className="card-title">{item.name}</h5>
                      <Link
                        to={`/games/${item.id}`}
                        className="stretched-link"
                        onClick={() => {
                          window.scroll(0, 0);
                        }}
                      ></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex flex-row justify-content-evenly">
              {carouselItem3?.map((item) => (
                <div className="col-6 col-md-4 px-1 mx-xl-5" key={item.id}>
                  <div className="card bg-success">
                    <img
                      src={item.background_image}
                      alt="Game cover"
                      className="card-img m-0"
                      style={{ height: "25vh", objectFit: "cover" }}
                    />
                    <div className="card-body text-white">
                      <h5 className="card-title">{item.name}</h5>
                      <Link
                        to={`/games/${item.id}`}
                        className="stretched-link"
                        onClick={() => {
                          window.scroll(0, 0);
                        }}
                      ></Link>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={btnTarget}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={btnTarget}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default HomeGamesByPlatforms;
