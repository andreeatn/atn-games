import { GameDetails, GameMovies, GameScreenshots } from "entities/game";
import useDataDetails from "hooks/useDataDetails";
import parse from "html-react-parser";
import GameDetailsMedia from "./GameDetailsMedia";
import { useParams } from "react-router-dom";

function GameDetailsContainer() {
  const params = useParams();
  const gameId = Number(params.gameId);

  const { data: game, error: errGame } = useDataDetails<GameDetails>(
    "games",
    "game",
    gameId
  );
  const ratings = [5, 4, 3, 2, 1];

  return (
    <>
      <nav id="gameDetailsNavBar" className="navbar navbar-dark bg-dark px-3">
        <ul className="nav nav-tabs">
          <li className="nav-item ">
            <a className="nav-link text-white" href="#media-section">
              Media
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#description-section">
              Description
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#specs-section">
              Specifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#rating-section">
              Rating
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#gameDetailsNavBar"
        data-bs-offset="0"
        className="scrollspy-gameDetails text-white"
        tabIndex={0}
      >
        <div className="row mb-5 mb-md-0 gx-md-5" id="media-section">
          <div className="col col-12 col-md-4 mx-2 my-5 mx-md-0 px-md-2 py-md-5 text-break">
            <h1 className="">{game?.name}</h1>
            <a href={game?.website} target="#" className="text-white">
              {game?.website}
            </a>
          </div>
          <div className="col col-12 col-md-8 my-md-5">
            <GameDetailsMedia gameId={gameId} />
          </div>
        </div>
        <div className="row" id="description-section">
          <h2 className="mb-3">Description</h2>
          {game?.description && parse(game?.description)}
        </div>
        <div className="row" id="specs-section">
          <h2 className="my-3">Specs</h2>
          <p className="my-1">
            Available Platforms:{" "}
            {game?.parent_platforms &&
              game?.parent_platforms.map((platform) => (
                <span
                  className="badge rounded-pill bg-info mx-1"
                  key={platform.platform.slug}
                >
                  {platform.platform.name}{" "}
                </span>
              ))}
          </p>
          <p className="my-1">
            Playtime: <span className="fw-bold">{game?.playtime} hours</span>
          </p>
          <p className="my-1">
            ESRB Rating:{" "}
            <span className="fw-bold">{game?.esrb_rating?.name || " "}</span>
          </p>
          <p className="my-1">
            Genres:{" "}
            {game?.genres.map((genre) => (
              <span className="fw-bold" key={genre.slug}>
                {genre.name}{" "}
              </span>
            ))}
          </p>
          <p className="my-1">
            Publishers:{" "}
            {game?.publishers.map((publisher) => (
              <span className="fw-bold" key={publisher.slug}>
                {publisher.name}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="row" id="rating-section">
          <h2 className="mt-4 mb-3">Rating</h2>
          <div className="col-md-4">
            <h5 className="card-title mb-2 my-md-2">Rating</h5>
            <h5 className="card-subtitle my-2 my-md-3">{game?.rating}</h5>
            <p className="card-text mb-4 my-md-3 ">
              Reviews count: {game?.ratings_count}
            </p>
          </div>
          <div className="col-md-6 ms-md-5 py-md-2">
            {ratings.map((rating) => (
              <div className="row" key={rating}>
                <div className="col-1 px-3 ps-md-5 pe-md-4">{rating}</div>
                <div className="col-10 col-md-8">
                  <div className="progress">
                    {game?.ratings.filter((r) => r.id === rating) &&
                      game?.ratings
                        .filter((r) => r.id === rating)
                        .map((r) => (
                          <span
                            className="progress-bar bg-info"
                            role="progressbar"
                            key={r.id}
                            style={{ width: `${r.percent}%` }}
                            aria-valuenow={r.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            {r.percent}%
                          </span>
                        ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDetailsContainer;
