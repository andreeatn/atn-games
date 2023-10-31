import HomeGamesByPlatforms from "components/Home/HomeGamesByPlatforms";
import HomeTrendsCards from "components/Home/HomeTrendsCards";

function HomePage() {
  return (
    <div className="container py-5">
      <h1 className="text-white mt-4 mb-5">
        Explore newest trends in the gaming world
      </h1>
      <HomeTrendsCards />
      <HomeGamesByPlatforms
        platformId="4"
        platformSlug="pc"
        platformName="pc"
      />
      <HomeGamesByPlatforms
        platformId="187"
        platformSlug="playstation5"
        platformName="playstation"
        ordering="added"
      />
      <HomeGamesByPlatforms
        platformId="186"
        platformSlug="xbox-series-x"
        platformName="xbox"
        ordering="created"
      />
      <HomeGamesByPlatforms
        platformId="21,3"
        platformSlug="android, ios"
        platformName="mobile"
      />
    </div>
  );
}

export default HomePage;
