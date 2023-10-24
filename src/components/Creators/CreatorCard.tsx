import Creator from "entities/creator";
import CreatorDetails from "./CreatorDetails";

interface Props {
  creator: Creator;
}

function CreatorCard({ creator }: Props) {
  const collapseId = `collapseDetails${creator.slug}`;
  const collapseTarget = "#" + collapseId;

  return (
    <>
      <div className="card bg-dark text-white my-5" key={creator.id}>
        <div className="row g-0">
          <div className="col-md-4 d-flex flex-column">
            <img
              src={creator.image}
              alt="Developer cover"
              className="card-img"
              style={{ height: "25vh", objectFit: "cover" }}
            />
            <button
              className="btn btn-sm btn-success my-3 align-self-center d-none d-md-inline-block"
              data-bs-toggle="collapse"
              data-bs-target={collapseTarget}
              aria-expanded="false"
              aria-controls={collapseId}
            >
              Show more details
            </button>
          </div>
          <div className="col-md-4">
            <div className="card-body px-3">
              <h5 className="card-title">{creator.name}</h5>
              <ul className="list-unstyled ps-3 pt-2">
                {creator.positions.map((position) => (
                  <li key={position.id}>{position.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h6 className="card-subtitle py-2 text-success">Top Games</h6>
              <ol className="ps-4">
                {creator.games.map((game) => (
                  <li key={game.id}>{game.name}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <button
          className="btn btn-sm btn-success mt-1 mb-4  align-self-center d-md-none"
          data-bs-toggle="collapse"
          data-bs-target={collapseTarget}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          Show more details
        </button>
        <div className="row">
          <div className="card-footer collapse" id={collapseId}>
            <CreatorDetails creatorId={creator.id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatorCard;
