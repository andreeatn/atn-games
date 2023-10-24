import Developer from "entities/developer";
import useData from "hooks/useData";

function DevelopersCards() {
  const { data: developers, error } = useData<Developer>("developers", 5);

  return (
    <>
      {developers?.results.map((dev) => (
        <div className="card bg-dark text-white my-5" key={dev.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={dev.image_background}
                alt="Developer cover"
                className="card-img"
                style={{ height: "25vh", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body px-3">
                <h5 className="card-title">{dev.name}</h5>
              </div>
              <div className="card-footer py-2">
                <h6 className="card-subtitle py-2 text-success">Top Games</h6>
                <ol className="ps-4">
                  {dev.games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DevelopersCards;
