import Platform from "entities/platforms";
import PublisherDetails from "./PublisherDetails";

interface Props {
  publisher: Platform;
}

function PublisherCard({ publisher }: Props) {
  const collapseId = `collapseDetails${publisher.slug}`;
  const collapseTarget = "#" + collapseId;

  return (
    <>
      <div className="card bg-dark text-white my-5" key={publisher.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={publisher.image_background}
              alt="Developer cover"
              className="card-img"
              style={{ height: "25vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body px-3">
              <h5 className="card-title">{publisher.name}</h5>
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
                {publisher.games.map((game) => (
                  <li key={game.id}>{game.name}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-footer collapse" id={collapseId}>
            <PublisherDetails publisherId={publisher.id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PublisherCard;
