import GameQueryContext from "context/gameQueryContext";
import GameQuery from "entities/gameQuery";
import { useContext } from "react";
import { MdArrowDropDown } from "react-icons/md";

function GamesOrderSelector() {
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);
  const handlesDropdownSelect = (ordering: string) => {
    setGameQuery({
      ...gameQuery,
      ordering: ordering,
    } as GameQuery);
  };

  return (
    <>
      <button
        className="btn btn-info text-white fw-bold"
        type="button"
        id="dropdownOrderMenu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order <MdArrowDropDown className="fs-5" />
      </button>
      <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownOrderMenu">
        <li>
          <button
            className="dropdown-item bg-dark text-white my-1"
            type="button"
            onClick={() => handlesDropdownSelect("name")}
          >
            Name A-Z
          </button>
        </li>
        <li>
          <button
            className="dropdown-item bg-dark text-white my-1"
            type="button"
            onClick={() => handlesDropdownSelect("-name")}
          >
            Name Z-A
          </button>
        </li>
        <li>
          <button
            className="dropdown-item bg-dark text-white my-1"
            type="button"
            onClick={() => handlesDropdownSelect("released")}
          >
            Released
          </button>
        </li>
        <li>
          <button
            className="dropdown-item bg-dark text-white my-1"
            type="button"
            onClick={() => handlesDropdownSelect("-rating")}
          >
            Rating
          </button>
        </li>
      </ul>
    </>
  );
}

export default GamesOrderSelector;
