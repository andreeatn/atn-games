import Platform from "entities/platforms";
import useData from "hooks/useData";
import PlatformCard from "./PlatformCard";

function PlatformsContainer() {
  const { data: platforms, error } = useData<Platform>("platforms", 5);

  return (
    <>
      {platforms?.results.map((platform) => (
        <PlatformCard platform={platform} key={platform.id} />
      ))}
    </>
  );
}

export default PlatformsContainer;
