import { IoMdMenu, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function NavBar() {
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
          <input
            type="search"
            className="form-control my-2 my-md-1"
            placeholder="Search"
            aria-label="Search"
          />
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
              <a
                href="#"
                className="nav-link text-white"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
