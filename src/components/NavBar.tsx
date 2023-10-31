import GameQueryContext from "context/gameQueryContext";
import GameQuery from "entities/gameQuery";
import { useContext, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { IoMdMenu, IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);
  const onSearchSubmit = (data: FieldValues) => {
    setGameQuery({
      ...gameQuery,
      genreId: undefined,
      genreName: undefined,
      platformId: undefined,
      platformName: undefined,
      ordering: undefined,
      search: data.search,
    } as GameQuery);
    navigate("/games");
    window.scroll(0, 0);
  };

  return (
    <nav
      id="siteNavBar"
      className="navbar navbar-expand-md fixed-top navbar-dark bg-success "
    >
      <div className="container">
        <Link
          to={"/"}
          className="navbar-brand fs-3 fw-bold font-monospace px-3 text-info"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          ATN Games
        </Link>

        <div className="d-flex justify-content-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span style={{ color: "white" }}>
              <IoIosSearch />
            </span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExpandedContent"
            aria-controls="navbarExpandedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span style={{ color: "white" }}>
              <IoMdMenu />
            </span>
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbarSearch">
          <form onSubmit={handleSubmit(onSearchSubmit)}>
            <input
              type="search"
              className="form-control my-2 my-md-1"
              placeholder="Search games"
              aria-label="Search"
              {...register("search")}
            />
          </form>
        </div>
        <div
          className="collapse navbar-collapse d-md-flex justify-content-md-end"
          id="navbarExpandedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={"games"}
                className="nav-link text-white"
                onClick={() => {
                  setGameQuery({} as GameQuery);
                  window.scroll(0, 0);
                }}
              >
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"platforms"}
                className="nav-link text-white"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                Platforms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"publishers"}
                className="nav-link text-white"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                Publishers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/support"}
                className="nav-link text-white"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
