import useGames from "hooks/useGames";

interface Props {
  platformId: string;
  platformName: string;
  ordering?: string;
}

function HomeGamesByPlatforms({ platformId, platformName, ordering }: Props) {
  const carouselId = `carousel${platformName}GamesControls`;
  const btnTarget = "#" + carouselId;
  const resultsNo = 6;
  const { data: games, error } = useGames(platformId, resultsNo, ordering);
  const carouselItem1 = games?.results.filter((game, index) => index < 2);
  const carouselItem2 = games?.results.filter(
    (game, index) => index > 1 && index < 4
  );
  const carouselItem3 = games?.results.filter(
    (game, index) => index > 3 && index < 6
  );
  return (
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
                    <a href="#" className="stretched-link"></a>
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
                    <a href="#" className="stretched-link"></a>
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
                    <a href="#" className="stretched-link"></a>
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={btnTarget}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeGamesByPlatforms;
