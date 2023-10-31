import PublisherDetails from "./PublisherDetails";
import Publisher from "entities/publishers";

interface Props {
  publisher: Publisher;
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
              alt="Publisher cover"
              className="card-img"
              style={{ height: "25vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body px-3">
              <h5 className="card-title mb-0 mb-md-2">{publisher.name}</h5>
              <button
                className="btn btn-success d-none d-md-inline-block"
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
              <button
                className="btn btn-success my-2 d-inline-block d-md-none"
                data-bs-toggle="collapse"
                data-bs-target={collapseTarget}
                aria-expanded="false"
                aria-controls={collapseId}
              >
                Show more details
              </button>
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
