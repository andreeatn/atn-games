import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import backgroundImg from "assets/gradient-bg.jpg";
import { GameQueryContextProvider } from "context/gameQueryContext";

function Layout() {
  return (
    <GameQueryContextProvider>
      <div
        className="container-fluid"
        style={{ background: `url(${backgroundImg})` }}
      >
        <header>
          <NavBar />
        </header>
        <div
          className="container"
          style={{
            marginTop: "60px",
            marginBottom: "50px",
          }}
        >
          <Outlet />
        </div>
        <footer className="footer bg-success text-white py-3">
          <Footer />
        </footer>
      </div>
    </GameQueryContextProvider>
  );
}

export default Layout;
