import Platform from "entities/platforms";
import PlatformDetails from "./PlatformDetails";

interface Props {
  platform: Platform;
}

function PlatformCard({ platform }: Props) {
  const collapseId = `collapseDetails${platform.slug}`;
  const collapseTarget = "#" + collapseId;

  return (
    <>
      <div className="card bg-dark text-white my-5" key={platform.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={platform.image_background}
              alt="Developer cover"
              className="card-img"
              style={{ height: "25vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body px-3">
              <h5 className="card-title">{platform.name}</h5>
              <button
                className="btn btn-success"
                data-bs-toggle="collapse"
                data-bs-target={collapseTarget}
                aria-expanded="false"
                aria-controls={collapseId}
              >
                Show more details
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h6 className="card-subtitle py-2 text-success">Top Games</h6>
              <ol className="ps-4">
                {platform.games.map((game) => (
                  <li key={game.id}>{game.name}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-footer collapse" id={collapseId}>
            <PlatformDetails platformId={platform.id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlatformCard;
