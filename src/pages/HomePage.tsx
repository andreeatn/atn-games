import HomeGamesByPlatforms from "../components/HomeGamesByPlatforms";
import HomeTrendsCards from "../components/HomeTrendsCards";

function HomePage() {
  return (
    <div className="container py-5">
      <h1 className="text-white mt-4 mb-5">
        Explore newest trends in the gaming world
      </h1>
      <HomeTrendsCards />
      <a href="#" className="text-decoration-none">
        <h2 className="text-white mt-5 mb-4 border-bottom border-2 pb-3">
          PC Games
        </h2>
      </a>
      <HomeGamesByPlatforms platformId="4" platformName="pc" />
      <a href="#" className="text-decoration-none">
        <h2 className="text-white mt-5 mb-4 border-bottom border-2 pb-3">
          PlayStation Games
        </h2>
      </a>
      <HomeGamesByPlatforms
        platformId="187"
        platformName="playstation"
        ordering="added"
      />
      <a href="#" className="text-decoration-none">
        <h2 className="text-white mt-5 mb-4 border-bottom border-2 pb-3">
          Xbox Games
        </h2>
      </a>
      <HomeGamesByPlatforms
        platformId="186"
        platformName="xbox"
        ordering="created"
      />
      <a href="#" className="text-decoration-none">
        <h2 className="text-white mt-5 mb-4 border-bottom border-2 pb-3">
          Mobile Games
        </h2>
      </a>
      <HomeGamesByPlatforms platformId="21,3" platformName="mobile" />
    </div>
  );
}

export default HomePage;
