import Game from "entities/game";
import { AiFillStar } from "react-icons/ai";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <div className="card bg-dark text-white" key={game.id}>
        <img
          src={game.background_image}
          className="card-img-top"
          alt="Game's thumbnail"
          style={{ height: "20vh" }}
        />
        <div className="card-body overflow-auto" style={{ height: "15vh" }}>
          <h4 className="card-title">{game.name}</h4>
          <p className="card-subtitle mt-3">
            <AiFillStar className="me-1" style={{ color: "yellow" }} />
            {game.rating}
          </p>
        </div>
      </div>
    </>
  );
}

export default GameCard;
