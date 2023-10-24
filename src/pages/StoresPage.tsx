import DevelopersImg from "../assets/ubisoft_logo.jpg";
import PlatformsImg from "../assets/controller.jpg";
import PublishersImg from "../assets/ea-logo.webp";
import StoresImg from "../assets/steam_logo.jpg";
import StoreDetails from "../components/StoreDetails";
import StoreCards from "../components/StoreCard";
import StoreContainer from "../components/StoreContainer";

function StoresPage() {
  return (
    <div className="container py-5">
      <h1 className="text-white mt-4 mb-5">Stores</h1>
      <StoreContainer />
    </div>
  );
}

export default StoresPage;
