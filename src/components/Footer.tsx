import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <h3 className="fs-5 fw-normal">Copywrite (C) 2023 Andreea TN</h3>
      <ul className="list-unstyled footer-menu d-flex flex-column flex-md-row justify-content-end">
        <li className="footer-menu-item mx-3">
          <a href="#" className=" nav-link text-white">
            Privacy Policy
          </a>
        </li>
        <li className="footer-menu-item mx-3">
          <a href="" className="nav-link text-white">
            Terms Of Use
          </a>
        </li>
        <li className="footer-menu-item ms-3">
          <Link
            to={"/support"}
            className="nav-link text-white"
            onClick={() => window.scroll(0, 0)}
          >
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
