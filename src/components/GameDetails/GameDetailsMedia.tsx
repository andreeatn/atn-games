import { GameScreenshots, GameMovies } from "entities/game";
import useGameMedia from "hooks/useGameMedia";

interface Props {
  gameId: number;
}

function GameDetailsMedia({ gameId }: Props) {
  const { data: screenshots, error: errScreenshots } =
    useGameMedia<GameScreenshots>("screenshots", gameId);
  const { data: movies, error: errMovies } = useGameMedia<GameMovies>(
    "movies",
    gameId
  );

  return (
    <>
      <div
        id="carouselGameMedia"
        className="carousel slide"
        data-bs-interval="false"
        data-bs-touch="true"
      >
        <div className="carousel-inner me-5">
          <div className="carousel-item active">
            <div className="ratio ratio-16x9">
              {movies?.results.length ? (
                <video controls>
                  <source src={movies?.results[0].data.max} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={screenshots?.results[0].image}
                  alt="Gameplay screenshot"
                />
              )}
            </div>
          </div>
          {screenshots?.results.map(
            (screenshot, index) =>
              index > 0 && (
                <div className="carousel-item" key={screenshot.id}>
                  <div className="ratio ratio-16x9">
                    <img src={screenshot.image} alt="Gameplay screenshot" />
                  </div>
                </div>
              )
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselGameMedia"
          data-bs-slide="prev"
          style={{ height: "30vh" }}
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
          data-bs-target="#carouselGameMedia"
          data-bs-slide="next"
          style={{ height: "30vh" }}
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

export default GameDetailsMedia;
