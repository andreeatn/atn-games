import GamesContainer from "components/Games/GamesContainer";
import GamesFilterSelector from "components/Games/GamesFilterSelector";
import GamesOrderSelector from "components/Games/GamesOrderSelector";
import GamesShowSelectedQuery from "components/Games/GamesShowSelectedQuery";

function GamesPage() {
  return (
    <>
      <div className="container py-5">
        <h1 className="text-white mt-4 mb-5">Games</h1>
        <div className="row">
          <div className="d-grid col-6 col-md-2">
            <GamesFilterSelector />
          </div>
          <div className="dropdown d-grid col-6 col-md-3 col-lg-2">
            <GamesOrderSelector />
          </div>
        </div>
        <div className="row">
          <GamesShowSelectedQuery />
        </div>
        <div className="row">
          <GamesContainer />
        </div>
      </div>
    </>
  );
}

export default GamesPage;
