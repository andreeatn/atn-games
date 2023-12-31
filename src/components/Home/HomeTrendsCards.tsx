import { useContext } from "react";
import DevelopersImg from "assets/ubisoft_logo.jpg";
import PlatformsImg from "assets/controller.jpg";
import PublishersImg from "assets/ea-logo.webp";
import StoresImg from "assets/steam_logo.jpg";
import { useNavigate } from "react-router-dom";
import GameQueryContext from "context/gameQueryContext";
import GameQuery from "entities/gameQuery";

function HomeTrendsCards() {
  const navigate = useNavigate();
  const { setGameQuery } = useContext(GameQueryContext);

  return (
    <div className="row row-cols-2 row-cols-md-3 g-2">
      <div className="col">
        <div className="card bg-dark">
          <img
            src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            alt=""
            className="card-img m-0"
            style={{ height: "25vh", objectFit: "cover" }}
          />
          <div className="card-img-overlay px-0 pt-4">
            <button
              className="btn btn-success btn-sm px-4 stretched-link"
              onClick={() => {
                setGameQuery({} as GameQuery);
                navigate("/games");
                window.scroll(0, 0);
              }}
            >
              Games
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-dark">
          <img
            src={StoresImg}
            alt=""
            className="card-img m-0"
            style={{ height: "25vh", objectFit: "cover" }}
          />
          <div className="card-img-overlay px-0 pt-4">
            <button
              className="btn btn-success btn-sm px-4 stretched-link"
              onClick={() => {
                navigate("/stores");
                window.scroll(0, 0);
              }}
            >
              Stores
            </button>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card bg-dark">
          <img
            src={DevelopersImg}
            alt=""
            className="card-img m-0"
            style={{ height: "25vh", objectFit: "cover" }}
          />
          <div className="card-img-overlay px-0 pt-4">
            <button
              className="btn btn-success btn-sm px-4 stretched-link"
              onClick={() => {
                navigate("/developers");
                window.scroll(0, 0);
              }}
            >
              Developers
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-dark">
          <img
            src={PlatformsImg}
            alt=""
            className="card-img m-0"
            style={{ height: "25vh", objectFit: "cover" }}
          />
          <div className="card-img-overlay px-0 pt-4">
            <button
              className="btn btn-success btn-sm px-4 stretched-link"
              onClick={() => {
                navigate("/platforms");
                window.scroll(0, 0);
              }}
            >
              Platforms
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-dark">
          <img
            src={PublishersImg}
            alt=""
            className="card-img m-0"
            style={{ height: "25vh", objectFit: "cover" }}
          />
          <div className="card-img-overlay px-0 pt-4">
            <button
              className="btn btn-success btn-sm px-4 stretched-link"
              onClick={() => {
                navigate("/publishers");
                window.scroll(0, 0);
              }}
            >
              Publishers
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-dark">
          <img
            src="https://media.rawg.io/media/persons/b76/b76df211424e553218ce800f9b1d38f0.png"
            alt=""
            className="card-img m-0"
            style={{ height: "25vh", objectFit: "cover" }}
          />
          <div className="card-img-overlay px-0 pt-4">
            <button
              className="btn btn-success btn-sm px-4 stretched-link"
              onClick={() => {
                navigate("/creators");
                window.scroll(0, 0);
              }}
            >
              Creators
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTrendsCards;
